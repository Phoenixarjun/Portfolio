import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linear } from 'gsap';
import { CatmullRomCurve3, TubeGeometry, TextureLoader } from 'three';


gsap.registerPlugin(ScrollTrigger);

const TubeScrollExperience = () => {
  const canvasRef = useRef(null);
  const scrollTargetRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const Mathutils = {
      normalize: function($value, $min, $max) {
          return ($value - $min) / ($max - $min);
      },
      interpolate: function($normValue, $min, $max) {
          return $min + ($max - $min) * $normValue;
      },
      map: function($value, $min1, $max1, $min2, $max2) {
          if ($value < $min1) {
              $value = $min1;
          }
          if ($value > $max1) {
              $value = $max1;
          }
          var res = this.interpolate(this.normalize($value, $min1, $max1), $min2, $max2);
          return res;
      }
    };
    var markers = [];

    //Get window size
    var ww = window.innerWidth,
      wh = window.innerHeight;

    var composer, params = {
        exposure: 1.3,
        bloomStrength: .9,
        bloomThreshold: 0,
        bloomRadius: 0
      };

    //Create a WebGL renderer
    var renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      shadowMapEnabled: true,
      shadowMapType: THREE.PCFSoftShadowMap
    });
    renderer.setSize(ww, wh);

    //Create an empty scene
    var scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x194794,0,100);

    var clock = new THREE.Clock();

    //Create a perpsective camera
    var cameraRotationProxyX = 3.14159;
    var cameraRotationProxyY = 0;

    var camera = new THREE.PerspectiveCamera(45, ww / wh, 0.001, 200);
    camera.rotation.y = cameraRotationProxyX;
    camera.rotation.z = cameraRotationProxyY;

    var c = new THREE.Group();
    c.position.z = 400;

    c.add(camera);
    scene.add(c);

    //set up render pass
    var renderScene = new RenderPass( scene, camera );
    var bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
    bloomPass.renderToScreen = true;
    bloomPass.threshold = params.bloomThreshold;
    bloomPass.strength = params.bloomStrength;
    bloomPass.radius = params.bloomRadius;
    composer = new EffectComposer( renderer );
    composer.setSize( window.innerWidth, window.innerHeight );
    composer.addPass( renderScene );
    composer.addPass( bloomPass );

    //Array of points
    var points = [
      [10, 89, 0],
      [50, 88, 10],
      [76, 139, 20],
      [126, 141, 12],
      [150, 112, 8],
      [157, 73, 0],
      [180, 44, 5],
      [207, 35, 10],
      [232, 36, 0]
    ];

    var p1, p2;

    //Convert the array of points into vertices
    for (var i = 0; i < points.length; i++) {
      var x = points[i][0];
      var y = points[i][2];
      var z = points[i][1];
      points[i] = new THREE.Vector3(x, y, z);
    }
    //Create a path from the points
    var path = new CatmullRomCurve3(points);
    path.tension = .5;

    //Create a new geometry with a different radius
    var geometry = new TubeGeometry( path, 300, 4, 32, false );

    const textureLoader = new TextureLoader();
    var texture = textureLoader.load( 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/68819/3d_space_5.jpg' , function ( texture ) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.offset.set( 0, 0 );
        texture.repeat.set( 15, 2 );
    });

    var mapHeight = textureLoader.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/68819/waveform-bump3.jpg', function( texture){
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.offset.set( 0, 0 );
      texture.repeat.set( 15, 2 );
    });

    var material = new THREE.MeshPhongMaterial({
      side: THREE.BackSide,
      map: texture,
      shininess: 20,
      bumpMap: mapHeight,
      bumpScale: -.03,
      specular: 0x0b2349
    });

    //Create a mesh
    var tube = new THREE.Mesh( geometry, material );
    scene.add( tube );

    //inner tube
    var geometry = new TubeGeometry( path, 150, 3.4, 32, false );
    var geo = new THREE.EdgesGeometry( geometry );

    var mat = new THREE.LineBasicMaterial( {
      linewidth: 2,
      opacity: .2,
      transparent: 1
    } );

    var wireframe = new THREE.LineSegments( geo, mat );
    scene.add( wireframe );

    //Create a point light in our scene
    var light = new THREE.PointLight(0xffffff, .35, 4,0);
    light.castShadow = true;
    scene.add(light);

    function updateCameraPercentage(percentage) {
      p1 = path.getPointAt(percentage);
      p2 = path.getPointAt(percentage + 0.03);

      c.position.set(p1.x,p1.y,p1.z);
      c.lookAt(p2);
      light.position.set(p2.x, p2.y, p2.z);
    }

    var cameraTargetPercentage = 0;
    var currentCameraPercentage = 0;

    gsap.defaultEase = Linear.easeNone;

    var tubePerc = {
      percent: 0
    }

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollTargetRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 5,
        markers: false
      }
    })
    tl.to(tubePerc, {
       percent:.96,
       ease: Linear.easeNone,
       duration: 10,
       onUpdate: function() {
         cameraTargetPercentage = tubePerc.percent;
       }
    });

    //particle system
    var spikeyTexture = textureLoader.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/68819/spikey.png');

    var particleCount = 6800,
        particles1 = new THREE.BufferGeometry(),
        particles2 = new THREE.BufferGeometry(),
        particles3 = new THREE.BufferGeometry(),
        pMaterial = new THREE.PointsMaterial({
          color: 0xb342f5,
          size: .5,
          map: spikeyTexture,
          transparent: true,
          blending: THREE.AdditiveBlending
        });

    // Create positions arrays
    const positions1 = new Float32Array(particleCount * 3);
    const positions2 = new Float32Array(particleCount * 3);
    const positions3 = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions1[i * 3] = Math.random() * 500 - 250;
      positions1[i * 3 + 1] = Math.random() * 50 - 25;
      positions1[i * 3 + 2] = Math.random() * 500 - 250;

      positions2[i * 3] = Math.random() * 500;
      positions2[i * 3 + 1] = Math.random() * 10 - 5;
      positions2[i * 3 + 2] = Math.random() * 500;

      positions3[i * 3] = Math.random() * 500;
      positions3[i * 3 + 1] = Math.random() * 10 - 5;
      positions3[i * 3 + 2] = Math.random() * 500;
    }

    particles1.setAttribute('position', new THREE.BufferAttribute(positions1, 3));
    particles2.setAttribute('position', new THREE.BufferAttribute(positions2, 3));
    particles3.setAttribute('position', new THREE.BufferAttribute(positions3, 3));

    var particleSystem1 = new THREE.Points(particles1, pMaterial);
    var particleSystem2 = new THREE.Points(particles2, pMaterial);
    var particleSystem3 = new THREE.Points(particles3, pMaterial);

    scene.add(particleSystem1);
    scene.add(particleSystem2);
    scene.add(particleSystem3);

    const handleMouseMove = (evt) => {
      cameraRotationProxyX = Mathutils.map(evt.clientX, 0, window.innerWidth, 3.24, 3.04);
      cameraRotationProxyY = Mathutils.map(evt.clientY, 0, window.innerHeight, -0.1, 0.1);
    };

    document.addEventListener('mousemove', handleMouseMove);

    function render(){
      currentCameraPercentage = cameraTargetPercentage
      
      camera.rotation.y += (cameraRotationProxyX - camera.rotation.y) / 15;
      camera.rotation.x += (cameraRotationProxyY - camera.rotation.x) / 15;
      
      updateCameraPercentage(currentCameraPercentage);
      
      //animate texture
      texture.offset.x += 0.004;
      
      particleSystem1.rotation.y += 0.00002;
      particleSystem2.rotation.x += 0.00005;
      particleSystem3.rotation.z += 0.00001;
      
      composer.render();
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      
      renderer.setSize(width, height);
      composer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      // Cleanup
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      if (tl) tl.kill();
      if (ScrollTrigger.getAll().length) {
        ScrollTrigger.getAll().forEach(instance => instance.kill());
      }
      // Dispose of Three.js resources
      if (renderer) {
        renderer.dispose();
      }
      if (material) {
        material.dispose();
      }
      if (geometry) {
        geometry.dispose();
      }
      if (texture) {
        texture.dispose();
      }
      if (mapHeight) {
        mapHeight.dispose();
      }
      if (spikeyTexture) {
        spikeyTexture.dispose();
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <canvas 
        ref={canvasRef} 
        className="experience fixed top-0 left-0 w-full h-screen z-0 pointer-events-none"
      />
      <div 
        ref={scrollTargetRef} 
        className="scrollTarget absolute h-[800vh] w-full top-0 z-0"
      />
      <div className="vignette-radial fixed top-0 left-0 h-screen w-full z-30 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_60%,black_150%)] pointer-events-none"></div>
      </div>
    </div>
  );
};

export default TubeScrollExperience;