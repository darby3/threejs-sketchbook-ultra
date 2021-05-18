(function() {
  document.addEventListener('DOMContentLoaded', function() {
    console.log("hello let us begin using threejs as well");

    // From 007. Add a second light

    // Universal variables.
    let lightAngle = 0;
    let lightPosX = 0;
    let lightPosY = 0;
    let lightPosZ = 3;

    let lightAngle2 = 0;
    let lightPos2X = 0;
    let lightPos2Y = 0;
    let lightPos2Z = 5;

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
      color: 0xffffff,
      specular: 0xffffff,
      shininess: 10
    });

    const sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );

    // Move the camera out so we can see the sphere.
    camera.position.z = 6;

    // Add a directional light to show off the object
    const spotLight = new THREE.SpotLight( 0x0000ff, 1 );
    spotLight.position.set( lightPosX, lightPosY, lightPosZ );
    scene.add(spotLight);

    // Add a second directional light to show off the object
    const spotLight2 = new THREE.SpotLight( 0xff0000, 1 );
    spotLight2.position.set( lightPos2X, lightPos2Y, lightPos2Z );
    scene.add(spotLight2);

    // Animation loop.
    var animate = function () {
      requestAnimationFrame( animate );

      lightPosX = Math.sin(lightAngle) * 10;
      lightPosY = Math.cos(lightAngle) * 10;
      spotLight.position.set( lightPosX, lightPosY, lightPosZ );

      lightPos2X = Math.cos(lightAngle2) * -10;
      lightPos2Z = Math.sin(lightAngle2) * 10;
      spotLight2.position.set( lightPos2X, lightPos2Y, lightPos2Z );

      lightAngle += 0.02;
      lightAngle2 += 0.04;

      renderer.render( scene, camera );
    };

    animate();
  });
}());
