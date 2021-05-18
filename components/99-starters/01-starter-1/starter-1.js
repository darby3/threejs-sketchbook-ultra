(function() {
  document.addEventListener('DOMContentLoaded', function() {
    console.log("hello let us begin using threejs as well");

    // From https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene

    // Create a scene
    var scene = new THREE.Scene();

    // Create a camera
    //   - FOV (degrees)
    //   - Aspect ratio
    //   - Near clipping plane
    //   - Far clipping plane
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

    // Create a renderer, set its size, append it to the document as a canvas element
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    // Create a geometry and a material
    // Create a cube as a mesh, comprising the geometry amd the material
    // Add it to the scene
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    // Cube and camera are both at (0, 0, 0).
    // Move the camera out so we can see the cube.
    camera.position.z = 5;

    // Animation loop.
    //   - Render the scene
    //   - Animate properties
    var animate = function () {
      requestAnimationFrame( animate );

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render( scene, camera );
    };

    animate();
  });
}());
