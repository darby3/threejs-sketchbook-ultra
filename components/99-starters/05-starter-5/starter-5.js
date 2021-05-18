(function() {
  document.addEventListener('DOMContentLoaded', function() {
    console.log("hello let us begin using threejs as well");

    // Procedural text.
    // See #4, https://threejs.org/docs/index.html#manual/en/introduction/Creating-text

    // Make some random text.
    // Stolen from https://stackoverflow.com/a/1349426/2900883
    function makeid(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }

    // Create a scene
    const scene = new THREE.Scene();

    // Get our canvas element
    const canvas = document.getElementById('canvas');

    // Create a camera and a renderer. Match them up with the canvas element.
    const camera = new THREE.PerspectiveCamera( 45, canvas.width / canvas.height, 0.1, 1000 );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true
    });
    renderer.setSize( canvas.width, canvas.height );

    // Adding procedural text.
    let text;
    const loader = new THREE.FontLoader();
    loader.load( '/fonts/helvetiker_regular.typeface.json', function ( font ) {
      const textGeometry = new THREE.TextGeometry(makeid(6), {
        font: font,
        size: 1,
        height: 0.125,
        curveSegments: 4
      });

      const textMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

      text = new THREE.Mesh(textGeometry, textMaterial);
      text.position.set(-2.5, 0, 0);
      scene.add(text);
    });

    // Animation loop.
    const animate = function () {
      requestAnimationFrame( animate );

      text.rotation.x += 0.01;

      renderer.render( scene, camera );
    };

    animate();
  });
}());
