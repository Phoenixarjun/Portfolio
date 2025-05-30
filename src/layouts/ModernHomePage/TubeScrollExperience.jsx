import React, { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three'; // Keep this for THREE.Color, Vector3 etc. if used directly
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linear } from 'gsap'; // Make sure Linear is correctly sourced from gsap
import {
    CatmullRomCurve3, TubeGeometry, TextureLoader, BufferGeometry, BufferAttribute,
    PointsMaterial, Points, EdgesGeometry, LineBasicMaterial, LineSegments, PointLight,
    MeshPhongMaterial, Mesh, Fog, Scene, PerspectiveCamera, Group, Clock, Vector2,
    Vector3, RepeatWrapping, BackSide, AdditiveBlending, PCFSoftShadowMap
} from 'three';

gsap.registerPlugin(ScrollTrigger);

const TubeScrollExperience = ({ isActive }) => {
    const canvasRef = useRef(null);
    const scrollTargetRef = useRef(null);

    const rendererRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const cameraGroupRef = useRef(null);
    const composerRef = useRef(null);
    const pathRef = useRef(null);
    const lightRef = useRef(null);
    const tubeMaterialRef = useRef(null);
    const mainTextureRef = useRef(null);
    const mapHeightTextureRef = useRef(null);
    const spikeyTextureRef = useRef(null);

    const particleSystem1Ref = useRef(null);
    const particleSystem2Ref = useRef(null);
    const particleSystem3Ref = useRef(null);

    const tubeGeomRef = useRef(null);
    const innerTubeGeomRef = useRef(null);
    const innerTubeEdgesGeomRef = useRef(null);
    const innerTubeLineMatRef = useRef(null);
    const particleMaterialRef = useRef(null);
    const particleGeom1Ref = useRef(null);
    const particleGeom2Ref = useRef(null);
    const particleGeom3Ref = useRef(null);

    const gsapTimelineRef = useRef(null);
    const requestRef = useRef(null);
    const isInitializedRef = useRef(false);

    const cameraRotationProxyXRef = useRef(Math.PI);
    const cameraRotationProxyYRef = useRef(0);
    const cameraTargetPercentageRef = useRef(0);
    const tubePercRef = useRef({ percent: 0 });

    const Mathutils = {
        normalize: ($value, $min, $max) => ($value - $min) / ($max - $min),
        interpolate: ($normValue, $min, $max) => $min + ($max - $min) * $normValue,
        map: function($value, $min1, $max1, $min2, $max2) {
            if ($value < $min1) $value = $min1;
            if ($value > $max1) $value = $max1;
            return this.interpolate(this.normalize($value, $min1, $max1), $min2, $max2);
        }
    };

    const handleResize = useCallback(() => {
        if (!isInitializedRef.current || !rendererRef.current || !cameraRef.current || !composerRef.current) return;
        const width = window.innerWidth;
        const height = window.innerHeight;

        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(width, height);
        composerRef.current.setSize(width, height);
    }, []); // Empty dependency array as it uses refs and window globals

    const renderSceneLoop = useCallback(() => {
        if (!isInitializedRef.current || !rendererRef.current || !composerRef.current || !cameraRef.current || !cameraGroupRef.current || !pathRef.current || !lightRef.current) {
            if(isActive) requestRef.current = requestAnimationFrame(renderSceneLoop);
            return;
        }

        const currentCameraPercentage = cameraTargetPercentageRef.current;
        const p1 = pathRef.current.getPointAt(currentCameraPercentage);
        const p2 = pathRef.current.getPointAt(Math.min(currentCameraPercentage + 0.03, 1));

        if (p1 && p2) {
            cameraGroupRef.current.position.copy(p1);
            cameraGroupRef.current.lookAt(p2);
            lightRef.current.position.copy(p2);
        }

        cameraRef.current.rotation.y += (cameraRotationProxyXRef.current - cameraRef.current.rotation.y) / 15;
        cameraRef.current.rotation.x += (cameraRotationProxyYRef.current - cameraRef.current.rotation.x) / 15;

        if (tubeMaterialRef.current && tubeMaterialRef.current.map) {
            tubeMaterialRef.current.map.offset.x += 0.004;
        }

        if (particleSystem1Ref.current) particleSystem1Ref.current.rotation.y += 0.00002;
        if (particleSystem2Ref.current) particleSystem2Ref.current.rotation.x += 0.00005;
        if (particleSystem3Ref.current) particleSystem3Ref.current.rotation.z += 0.00001;

        composerRef.current.render();
        requestRef.current = requestAnimationFrame(renderSceneLoop);
    }, [isActive]); // isActive is a dependency as it's used in the initial check

    const handleMouseMove = useCallback((evt) => {
        cameraRotationProxyXRef.current = Mathutils.map(evt.clientX, 0, window.innerWidth, Math.PI + 0.1, Math.PI - 0.1);
        cameraRotationProxyYRef.current = Mathutils.map(evt.clientY, 0, window.innerHeight, -0.1, 0.1);
    }, [Mathutils]); // Mathutils is stable


    const init = useCallback(() => {
        if (!canvasRef.current || !scrollTargetRef.current || isInitializedRef.current) return;

        const ww = window.innerWidth;
        const wh = window.innerHeight;

        rendererRef.current = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });
        rendererRef.current.setSize(ww, wh);
        rendererRef.current.shadowMap.enabled = true;
        rendererRef.current.shadowMap.type = THREE.PCFSoftShadowMap;

        sceneRef.current = new THREE.Scene();
        sceneRef.current.fog = new THREE.Fog(0x194794, 0, 100);

        cameraRotationProxyXRef.current = Math.PI;
        cameraRotationProxyYRef.current = 0;
        cameraRef.current = new THREE.PerspectiveCamera(45, ww / wh, 0.001, 200);
        cameraRef.current.rotation.y = cameraRotationProxyXRef.current;
        cameraRef.current.rotation.x = cameraRotationProxyYRef.current;

        cameraGroupRef.current = new THREE.Group();
        cameraGroupRef.current.add(cameraRef.current);
        sceneRef.current.add(cameraGroupRef.current);

        const renderPass = new RenderPass(sceneRef.current, cameraRef.current);
        const bloomPass = new UnrealBloomPass(new THREE.Vector2(ww, wh), 0.9, 0, 0);
        composerRef.current = new EffectComposer(rendererRef.current);
        composerRef.current.setSize(ww, wh);
        composerRef.current.addPass(renderPass);
        composerRef.current.addPass(bloomPass);

        const pointsData = [
            [10, 89, 0], [50, 88, 10], [76, 139, 20], [126, 141, 12],
            [150, 112, 8], [157, 73, 0], [180, 44, 5], [207, 35, 10],
            [232, 36, 0]
        ];
        const points = pointsData.map(p => new THREE.Vector3(p[0], p[2], p[1]));
        pathRef.current = new THREE.CatmullRomCurve3(points);
        pathRef.current.tension = 0.5;

        const initialPoint = pathRef.current.getPointAt(0);
        if (initialPoint) cameraGroupRef.current.position.copy(initialPoint);
        const lookAtPoint = pathRef.current.getPointAt(0.01);
        if (lookAtPoint) cameraGroupRef.current.lookAt(lookAtPoint);

        const textureLoader = new TextureLoader();
        mainTextureRef.current = textureLoader.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/68819/3d_space_5.jpg', (tex) => {
            tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.offset.set(0, 0); tex.repeat.set(15, 2);
        });
        mapHeightTextureRef.current = textureLoader.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/68819/waveform-bump3.jpg', (tex) => {
            tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.offset.set(0, 0); tex.repeat.set(15, 2);
        });

        tubeMaterialRef.current = new THREE.MeshPhongMaterial({
            side: THREE.BackSide, map: mainTextureRef.current, shininess: 20,
            bumpMap: mapHeightTextureRef.current, bumpScale: -0.03, specular: 0x0b2349
        });
        tubeGeomRef.current = new THREE.TubeGeometry(pathRef.current, 300, 4, 32, false);
        const tube = new THREE.Mesh(tubeGeomRef.current, tubeMaterialRef.current);
        sceneRef.current.add(tube);

        innerTubeGeomRef.current = new THREE.TubeGeometry(pathRef.current, 150, 3.4, 32, false);
        innerTubeEdgesGeomRef.current = new THREE.EdgesGeometry(innerTubeGeomRef.current);
        innerTubeLineMatRef.current = new THREE.LineBasicMaterial({ linewidth: 2, opacity: 0.2, transparent: true });
        const wireframe = new THREE.LineSegments(innerTubeEdgesGeomRef.current, innerTubeLineMatRef.current);
        sceneRef.current.add(wireframe);

        lightRef.current = new THREE.PointLight(0xffffff, 0.35, 4, 0);
        lightRef.current.castShadow = true;
        sceneRef.current.add(lightRef.current);

        spikeyTextureRef.current = textureLoader.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/68819/spikey.png');
        particleMaterialRef.current = new THREE.PointsMaterial({
            color: 0xb342f5, size: 0.5, map: spikeyTextureRef.current,
            transparent: true, blending: THREE.AdditiveBlending
        });

        const createParticleSystem = (offsetFactor = 0, geomRef) => {
            const particleCount = 6800;
            const positions = new Float32Array(particleCount * 3);
            for (let i = 0; i < particleCount; i++) {
                positions[i * 3] = (Math.random() - 0.5) * (500 + offsetFactor);
                positions[i * 3 + 1] = (Math.random() - 0.5) * (50 + offsetFactor / 10);
                positions[i * 3 + 2] = (Math.random() - 0.5) * (500 + offsetFactor);
            }
            geomRef.current = new THREE.BufferGeometry();
            geomRef.current.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            const system = new THREE.Points(geomRef.current, particleMaterialRef.current);
            sceneRef.current.add(system);
            return system;
        };
        particleSystem1Ref.current = createParticleSystem(0, particleGeom1Ref);
        particleSystem2Ref.current = createParticleSystem(50, particleGeom2Ref);
        particleSystem3Ref.current = createParticleSystem(-50, particleGeom3Ref);

        gsap.defaultEase = Linear.easeNone;
        gsapTimelineRef.current = gsap.timeline({
            scrollTrigger: {
                trigger: scrollTargetRef.current, start: "top top", end: "bottom bottom",
                scrub: 5, markers: false,
            },
            paused: true, // Timeline is initially paused
            onUpdate: () => {
                if (tubePercRef.current) { // Ensure ref and its content exist
                    cameraTargetPercentageRef.current = tubePercRef.current.percent;
                }
            }
        });
        gsapTimelineRef.current.to(tubePercRef.current, { // Target the object containing 'percent'
            percent: 0.96, ease: Linear.easeNone, duration: 10, // duration is for context if not scrubbed
        });

        isInitializedRef.current = true;
        handleResize(); // Call memoized handleResize
    }, [handleResize]); // handleResize is a dependency

    const startAnimation = useCallback(() => {
        if (!isInitializedRef.current) {
            init(); // Call memoized init
        }
        if (isInitializedRef.current) {
            requestRef.current = requestAnimationFrame(renderSceneLoop); // renderSceneLoop is memoized
            if (gsapTimelineRef.current) {
                // Refresh ScrollTrigger if needed, though usually robust
                // ScrollTrigger.refresh();
                gsapTimelineRef.current.play();
            }
            document.addEventListener('mousemove', handleMouseMove); // handleMouseMove is memoized
            window.addEventListener('resize', handleResize);         // handleResize is memoized
        }
    }, [init, renderSceneLoop, handleMouseMove, handleResize]);

    const pauseAnimation = useCallback(() => {
        if (isInitializedRef.current) {
            cancelAnimationFrame(requestRef.current);
            if (gsapTimelineRef.current) {
                gsapTimelineRef.current.pause();
            }
            document.removeEventListener('mousemove', handleMouseMove); // handleMouseMove is memoized
            // Resize listener is kept based on original logic
        }
    }, [handleMouseMove]);


    const destroy = useCallback(() => {
        if (!isInitializedRef.current) return;

        cancelAnimationFrame(requestRef.current);
        document.removeEventListener('mousemove', handleMouseMove); // Use memoized version
        window.removeEventListener('resize', handleResize);       // Use memoized version

        if (gsapTimelineRef.current) {
            if (gsapTimelineRef.current.scrollTrigger) {
                gsapTimelineRef.current.scrollTrigger.kill(); // Kill the ST instance associated with the timeline
            }
            gsapTimelineRef.current.kill(); // Kill the timeline itself
            gsapTimelineRef.current = null;
        }
        // Fallback for any other ScrollTriggers on this specific target, though the above should cover it.
        // ScrollTrigger.getAll().forEach(st => {
        //     if (st.trigger === scrollTargetRef.current) st.kill();
        // });
        
        [tubeMaterialRef, innerTubeLineMatRef, particleMaterialRef].forEach(matRef => {
            if (matRef.current) { matRef.current.dispose(); matRef.current = null; }
        });
        [mainTextureRef, mapHeightTextureRef, spikeyTextureRef].forEach(texRef => {
            if (texRef.current) { texRef.current.dispose(); texRef.current = null; }
        });
        [tubeGeomRef, innerTubeGeomRef, innerTubeEdgesGeomRef, particleGeom1Ref, particleGeom2Ref, particleGeom3Ref].forEach(geomRef => {
            if (geomRef.current) { geomRef.current.dispose(); geomRef.current = null; }
        });

        if (sceneRef.current) {
            while(sceneRef.current.children.length > 0){
                const object = sceneRef.current.children[0];
                if (object.geometry) object.geometry.dispose();
                if (object.material) {
                    if (Array.isArray(object.material)) {
                        object.material.forEach(material => material.dispose());
                    } else {
                        object.material.dispose();
                    }
                }
                sceneRef.current.remove(object);
            }
        }
        
        if (composerRef.current) {
            composerRef.current = null;
        }
        if (rendererRef.current) {
            rendererRef.current.dispose();
            rendererRef.current = null;
        }

        sceneRef.current = null;
        cameraRef.current = null;
        cameraGroupRef.current = null;
        pathRef.current = null;
        lightRef.current = null;

        isInitializedRef.current = false;
    }, [handleMouseMove, handleResize]); // Dependencies for removeEventListener

    // Effect for handling isActive state changes (start/pause animation)
    useEffect(() => {
        if (isActive) {
            startAnimation();
        } else {
            // Only pause if it was actually initialized
            if (isInitializedRef.current) {
                pauseAnimation();
            }
        }
    }, [isActive, startAnimation, pauseAnimation]);

    // Effect for handling component mount and unmount (for full destruction)
    useEffect(() => {
        // This effect's cleanup function runs once on unmount.
        return () => {
            destroy(); // Call the memoized destroy function
        };
    }, [destroy]); // `destroy` is memoized, so this effect runs its cleanup on unmount only.


    const canvasStyle = isActive || isInitializedRef.current ? { width: '100%', height: '100%' } : { display: 'none' };

    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
            <canvas
                ref={canvasRef}
                style={canvasStyle}
            />
            <div
                ref={scrollTargetRef}
                className="scrollTarget absolute h-[800vh] w-full top-0 left-0"
                style={isInitializedRef.current ? {} : { display: 'none', zIndex: -1 }}
            />
            {isActive && (
                <div className="vignette-radial fixed top-0 left-0 h-screen w-full z-30 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_60%,black_150%)]"></div>
                </div>
            )}
        </div>
    );
};

export default TubeScrollExperience;

