(function() {
  document.addEventListener('DOMContentLoaded', function() {
    console.log("hello let us begin using threejs as well");

    // From 006. Move the light around the scene/object.

    // Universal variables.
    let lightAngle = 0;
    let lightPosX = 0;
    let lightPosY = 0;
    let lightPosZ = 3;

    // General set-up.
    const scene = new THREE.Scene();
    const canvas = document.getElementById('canvas');
    const camera = new THREE.PerspectiveCamera( 45, canvas.width / canvas.height, 0.1, 200 );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true
    });
    renderer.setSize( canvas.width, canvas.height );

    // Create a sphere so we can track the movement of the light.
    // Give it a MeshPhoneMaterial so we can see the effects of our light.
    const geometry = new THREE.SphereGeometry( 2, 16, 16 );
    const material = new THREE.MeshPhongMaterial({
      color: 0x2194ce,
      specular: 0x2194ce,
      shininess: 7
    });

    const sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );

    // Move the camera out so we can see the sphere.
    camera.position.z = 6;

    // Add a directional light to show off the object
    const spotLight = new THREE.SpotLight( 0xffffff, 1 );
    spotLight.position.set( lightPosX, lightPosY, lightPosZ );
    scene.add(spotLight);

    // Animation loop.
    var animate = function () {
      requestAnimationFrame( animate );

      lightPosX = Math.sin(lightAngle) * 10;
      lightPosY = Math.cos(lightAngle) * 10;
      spotLight.position.set( lightPosX, lightPosY, lightPosZ );

      lightAngle += 0.02;

      renderer.render( scene, camera );
    };

    animate();
  });
}());
