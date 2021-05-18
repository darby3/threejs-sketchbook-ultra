(function() {
  document.addEventListener('DOMContentLoaded', function() {
    console.log("hello let us begin using threejs as well");

    // From 002. Create a plane geometry.
    // https://threejs.org/docs/index.html#api/en/geometries/PlaneGeometry

    // Universal variables.
    let imageAngle = 0;

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

    // Load an image to use as a texture
    var texture = new THREE.TextureLoader().load( '../../../img/2048x1024xplacekitten.jpg' );

    // Create a plane geometry.
    // Use the texture loaded above on our material.
    const planeGeometry = new THREE.PlaneGeometry( 1, 1, 1, 1 );
    const planeMaterial = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide,
      map: texture
    });
    const plane = new THREE.Mesh( planeGeometry, planeMaterial );
    plane.scale.set(12, 6, 1);
    scene.add( plane );

    // Move the camera out so we can see the cube.
    camera.position.z = 10;

    // Add a directional light to show off the object
    const spotLight = new THREE.SpotLight( 0xffffff, 1 );
    spotLight.position.set( 0, 0, 10 );
    scene.add(spotLight);

    // Animation loop.
    const animate = function () {
      requestAnimationFrame( animate );

      plane.rotation.y = Math.sin(imageAngle);
      imageAngle += 0.025;

      renderer.render( scene, camera );
    };

    animate();
  });
}());
