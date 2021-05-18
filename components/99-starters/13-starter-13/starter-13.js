(function() {
  document.addEventListener('DOMContentLoaded', function() {
    console.log("hello let us begin using threejs as well");

    // From 012. Use mouse position information.
    // See https://threejsfundamentals.org/threejs/lessons/threejs-picking.html.

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

    // Move the camera out so we can see the cube.
    camera.position.z = 8;

    const pickPosition = {x: 0, y: 0};
    clearPickPosition();

    function getCanvasRelativePosition(event) {
      const rect = canvas.getBoundingClientRect();
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    }

    function setPickPosition(event) {
      const pos = getCanvasRelativePosition(event);
      pickPosition.x = (pos.x / canvas.clientWidth ) *  2 - 1;
      pickPosition.y = (pos.y / canvas.clientHeight) * -2 + 1;  // note we flip Y
    }

    function clearPickPosition() {
      // unlike the mouse which always has a position
      // if the user stops touching the screen we want
      // to stop picking. For now we just pick a value
      // unlikely to pick something
      pickPosition.x = -100000;
      pickPosition.y = -100000;
    }

    canvas.addEventListener('mousemove', setPickPosition);
    canvas.addEventListener('mouseout', clearPickPosition);
    canvas.addEventListener('mouseleave', clearPickPosition);

    // Animation loop.
    const animate = function () {
      requestAnimationFrame( animate );

      for (const cube of cubes) {
        cube.rotation.x += 0.02;

        if (pickPosition.x > -100000) {
          cube.rotation.y += 0.25 * pickPosition.x;
        }
      }

      renderer.render( scene, camera );
    };

    animate();
  });
}());
