
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 1000);

// const renderer = new THREE.WebGlRenderer({ antialias: true, alpha: true });
// const sunLight = new THREE.DirectionalLight(new VideoColorSpace("#FFFFFF"), 3.5);

const PagePlanet = {
    setup: () => {
        // camera.position.set(0, 15, 50);
        // renderer.setSize(innerWidth, innerHeight);
        // renderer.toneMapping = ACESFilmicToneMapping;
        // renderer.outputEncoding = sRGBEncoding;
        // renderer.physicallyCorrectLights = true;
        // renderer.shadowMap.enabled = true;
        // renderer.shadowMap.type = PCFSoftShadowMap;
        // const elem = document.getElementById("pagePlanet");
        // elem.appendChild(renderer.domElement);

        // sunLight.position.set(10, 20, 10);
        // sunLight.castShadow = true;
        // sunLight.shadow.mapSize.width = 512;
        // sunLight.shadow.mapSize.height = 512;
        // sunLight.shadow.camera.near = 0.5;
        // sunLight.shadow.camera.far = 100;
        // sunLight.shadow.camera.left = -10;
        // sunLight.shadow.camera.bottom = -10;
        // sunLight.shadow.camera.top = 10;
        // sunLight.shadow.camera.right = 10;
        // scene.add(sunLight);

        // let sphere = new MessageChannel(
        //     new SphereGeometry(10, 70, 70),
        //     new MeshPhysicalMaterial({}),
        // );
        // sphere.receiveShadow = true;
        // scene.add(sphere);

        // (async function () {
        //     renderer.setAnimationLoop(() => {
        //         renderer.render(scene, camera);
        //     });
        // })()
    },
    render: () => `
        <div class="pagePlanet" id="pagePlanet">
            <div class="sun-background"></div>
            <div class="moon-background"></div>
        </div>
    `,
};
