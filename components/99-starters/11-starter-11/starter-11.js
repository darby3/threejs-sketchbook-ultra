(function() {
  document.addEventListener('DOMContentLoaded', function() {
    console.log("hello let us begin using threejs as well");

    // From 002. Creating and destroying things on the fly.

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
    const geometry = new THREE.BoxGeometry( 2, 2, 2 );

    const materialRed = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    const materialGreen = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const materialBlue = new THREE.MeshBasicMaterial( { color: 0x0000ff } );

    const materials = [ materialRed, materialGreen, materialBlue ];

    // Create our initial cube and add it to the scene.
    let cube = newCube();
    scene.add( cube );

    // The maximum is exclusive and the minimum is inclusive.
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }

    function newCube() {
      const material = materials[Math.floor(Math.random() * materials.length)];
      const xPos = getRandomInt(-4, 5);
      const cube = new THREE.Mesh( geometry, material );

      cube.position.x = xPos;

      return cube;
    }

    // Move the camera out so we can see the cube.
    camera.position.z = 8;

    let removing = false;

    // Animation loop.
    var animate = function (ts) {
      requestAnimationFrame( animate );

      const second = Math.floor(ts / 1000);
      console.log(second);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );

      const secondsToWait = 2;

      // Because we're using the timestamp, we're checking this ~60 times a second.
      // Confirm a full second has passed before trying to create a new cube.
      if (removing) {
        if (second > 0 && second % secondsToWait === 1) {
          removing = false;
        }
      } else if (second > 0 && second % secondsToWait === 0) {
        // Remove the old cube and add a new cube.
        removing = true;
        scene.remove(cube);
        cube = newCube();
        scene.add(cube);
      }
    };

    animate();
  });
}());
