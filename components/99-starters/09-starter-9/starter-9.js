(function() {
  document.addEventListener('DOMContentLoaded', function() {
    console.log("hello let us begin using threejs as well");

    // From 002. Create a plane geometry.
    // https://threejs.org/docs/index.html#api/en/geometries/PlaneGeometry

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
    const geometry = new THREE.BoxGeometry( 2, 2, 2 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    // Create a plane geometry.
    const planeGeometry = new THREE.PlaneGeometry( 4, 4, 32 );
    const planeMaterial = new THREE.MeshBasicMaterial({
      color: 0x0000ff,
      side: THREE.DoubleSide
    });
    const plane = new THREE.Mesh( planeGeometry, planeMaterial );
    plane.rotation.y = 0.75;
    scene.add( plane );

    // Move the camera out so we can see the cube.
    camera.position.z = 5;

    // Animation loop.
    const animate = function () {
      requestAnimationFrame( animate );

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      plane.rotation.x += 0.01;

      renderer.render( scene, camera );
    };

    animate();
  });
}());
