(function() {
  document.addEventListener('DOMContentLoaded', function() {
    console.log("hello let us begin using threejs as well");

    // From 002. Create an array of cubes and animate them.

    // Create a scene
    const scene = new THREE.Scene();

    // Get our canvas element
    const canvas = document.getElementById('canvas');

    // Create a camera and a renderer. Match them up with the canvas element.
    const camera = new THREE.PerspectiveCamera( 45, canvas.width / canvas.height, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true
    });
    renderer.setSize( canvas.width, canvas.height );

    // Create a cube
    const geometry = new THREE.BoxGeometry( 0.5, 4, 0.5 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

    // Array of cubes.
    let cubes = [];

    for (let i = -5; i < 6; i++) {
      const cube = new THREE.Mesh( geometry, material );
      cube.position.x = i;
      scene.add(cube);
      cubes.push(cube);
    }

    console.dir(scene);

    // Move the camera out so we can see the cube.
    camera.position.z = 8;

    // Animation loop.
    const animate = function () {
      requestAnimationFrame( animate );

      for (const cube of cubes) {
        cube.rotation.x += 0.02;
        cube.rotation.y += 0.04;
      }

      renderer.render( scene, camera );
    };

    animate();
  });
}());
