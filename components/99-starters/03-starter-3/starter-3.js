(function() {
  document.addEventListener('DOMContentLoaded', function() {
    console.log("hello let us begin using threejs as well");

    // Drawing lines: https://threejs.org/docs/index.html#manual/en/introduction/Drawing-lines

    // Set-up
    const scene = new THREE.Scene();
    const canvas = document.getElementById('canvas');

    const camera = new THREE.PerspectiveCamera( 45, canvas.width / canvas.height, 0.1, 1000 );
    camera.position.set( 0, 0, 5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true
    });
    renderer.setSize( canvas.width, canvas.height );

    // Define a LineBasicMaterial
    var material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

    // Create a basic geometry and give it some vertices
    var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3( -2, 0, 0) );
    geometry.vertices.push(new THREE.Vector3( 0, 2, 0) );
    geometry.vertices.push(new THREE.Vector3( 2, 0, 0) );
    geometry.vertices.push(new THREE.Vector3( 0, 0, 2) );
    geometry.vertices.push(new THREE.Vector3( 0, 2, 2) );
    geometry.vertices.push(new THREE.Vector3( -2, 0, 2) );

    // Put the material and the geometry together to get a line object.
    // Add it to the scene.
    var line = new THREE.Line( geometry, material );
    scene.add( line );

    // Animation loop.
    var animate = function () {
      requestAnimationFrame( animate );

      line.rotation.x += 0.01;
      line.rotation.y += 0.01;
      line.rotation.z += 0.01;

      renderer.render( scene, camera );
    };

    animate();
  });
}());
