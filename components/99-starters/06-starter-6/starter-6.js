(function() {
  document.addEventListener('DOMContentLoaded', function() {
    console.log("hello let us begin using threejs as well");

    // From 002. Add lights, change material.

    // General set-up.
    const scene = new THREE.Scene();
    const canvas = document.getElementById('canvas');
    const camera = new THREE.PerspectiveCamera( 45, canvas.width / canvas.height, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true
    });
    renderer.setSize( canvas.width, canvas.height );

    // Create a cube.
    // Give it a MeshPhoneMaterial so we can see the effects of our light.
    const geometry = new THREE.BoxGeometry( 2, 2, 2 );
    const material = new THREE.MeshPhongMaterial({
      color: 0x2194ce,
      specular: 0x2194ce,
      shininess: 100
    });

    const cube = new THREE.Mesh( geometry, material );
    cube.rotation.set(-0.45, 0.625, 0);
    scene.add( cube );

    // Move the camera out so we can see the cube.
    camera.position.z = 6;

    // Add a directional light to show off the object
    const spotLight = new THREE.SpotLight( 0xffffff, 1 );
    spotLight.position.set( 2, 2, 5 );
    scene.add(spotLight);

    // Animation loop.
    var animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    };

    animate();
  });
}());
