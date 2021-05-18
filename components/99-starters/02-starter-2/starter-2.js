(function() {
  document.addEventListener('DOMContentLoaded', function() {
    console.log("hello let us begin using threejs as well");

    // Take the starter tutorial and apply it to a pre-created canvas element.

    // Create a scene
    const scene = new THREE.Scene();

    // Get our canvas element
    const canvas = document.getElementById('canvas');

    // Create a camera and a renderer. Match them up with the canvas element.
    const camera = new THREE.PerspectiveCamera( 75, canvas.width / canvas.height, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true
    });
    renderer.setSize( canvas.width, canvas.height );

    // Create a cube
    var geometry = new THREE.BoxGeometry( 2, 2, 2 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    // Move the camera out so we can see the cube.
    camera.position.z = 5;

    // Animation loop.
    var animate = function () {
      requestAnimationFrame( animate );

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render( scene, camera );
    };

    animate();
  });
}());
