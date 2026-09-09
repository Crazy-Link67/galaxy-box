// ==========================================
// GALAXYBOX - WebGL 2.0 3D Rendering Engine
// Hardware-Accelerated 3D Voxel Heightfield,
// 360° Orbit Camera, 3D Lighting & Shadows,
// Procedural Pixel-Art Sprite Texture Atlas
// Zero External Dependencies (100% Vanilla WebGL)
// ==========================================

// --- Lightweight 3D Matrix & Vector Math Core ---
const Mat4 = {
    create() {
        const out = new Float32Array(16);
        out[0] = 1; out[5] = 1; out[10] = 1; out[15] = 1;
        return out;
    },

    perspective(out, fovY, aspect, near, far) {
        const f = 1.0 / Math.tan(fovY / 2);
        const nf = 1 / (near - far);
        out[0] = f / aspect; out[1] = 0; out[2] = 0; out[3] = 0;
        out[4] = 0; out[5] = f; out[6] = 0; out[7] = 0;
        out[8] = 0; out[9] = 0; out[10] = (far + near) * nf; out[11] = -1;
        out[12] = 0; out[13] = 0; out[14] = (2 * far * near) * nf; out[15] = 0;
        return out;
    },

    lookAt(out, eye, center, up) {
        let x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
        let eyex = eye[0], eyey = eye[1], eyez = eye[2];
        let upx = up[0], upy = up[1], upz = up[2];
        let centerx = center[0], centery = center[1], centerz = center[2];

        z0 = eyex - centerx;
        z1 = eyey - centery;
        z2 = eyez - centerz;
        len = Math.hypot(z0, z1, z2);
        if (len <= 0.00001) { z0 = 0; z1 = 0; z2 = 1; }
        else { len = 1 / len; z0 *= len; z1 *= len; z2 *= len; }

        x0 = upy * z2 - upz * z1;
        x1 = upz * z0 - upx * z2;
        x2 = upx * z1 - upy * z0;
        len = Math.hypot(x0, x1, x2);
        if (len <= 0.00001) { x0 = 0; x1 = 0; x2 = 0; }
        else { len = 1 / len; x0 *= len; x1 *= len; x2 *= len; }

        y0 = z1 * x2 - z2 * x1;
        y1 = z2 * x0 - z0 * x2;
        y2 = z0 * x1 - z1 * x0;
        len = Math.hypot(y0, y1, y2);
        if (len <= 0.00001) { y0 = 0; y1 = 0; y2 = 0; }
        else { len = 1 / len; y0 *= len; y1 *= len; y2 *= len; }

        out[0] = x0; out[1] = y0; out[2] = z0; out[3] = 0;
        out[4] = x1; out[5] = y1; out[6] = z1; out[7] = 0;
        out[8] = x2; out[9] = y2; out[10] = z2; out[11] = 0;
        out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
        out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
        out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
        out[15] = 1;
        return out;
    },

    multiply(out, a, b) {
        const a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
        const a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
        const a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
        const a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

        let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
        out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

        b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
        out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

        b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
        out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

        b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
        out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        return out;
    },

    invert(out, a) {
        const a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
        const a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
        const a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
        const a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

        const b00 = a00 * a11 - a01 * a10;
        const b01 = a00 * a12 - a02 * a10;
        const b02 = a00 * a13 - a03 * a10;
        const b03 = a01 * a12 - a02 * a11;
        const b04 = a01 * a13 - a03 * a11;
        const b05 = a02 * a13 - a03 * a12;
        const b06 = a20 * a31 - a21 * a30;
        const b07 = a20 * a32 - a22 * a30;
        const b08 = a20 * a33 - a23 * a30;
        const b09 = a21 * a32 - a22 * a31;
        const b10 = a21 * a33 - a23 * a31;
        const b11 = a22 * a33 - a23 * a32;

        let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
        if (!det) return null;
        det = 1.0 / det;

        out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
        out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
        out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
        out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
        out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
        out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
        out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
        out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
        out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
        out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
        out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
        out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
        out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
        out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
        out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
        out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
        return out;
    }
};

const Vec3 = {
    create(x = 0, y = 0, z = 0) {
        return [x, y, z];
    },

    transformMat4(out, a, m) {
        const x = a[0], y = a[1], z = a[2];
        let w = m[3] * x + m[7] * y + m[11] * z + m[15];
        w = w || 1.0;
        out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
        out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
        out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
        return out;
    },

    normalize(out, a) {
        const len = Math.hypot(a[0], a[1], a[2]);
        if (len > 0.00001) {
            out[0] = a[0] / len;
            out[1] = a[1] / len;
            out[2] = a[2] / len;
        } else {
            out[0] = 0; out[1] = 0; out[2] = 0;
        }
        return out;
    }
};

// --- WebGL 2.0 Shader Sources ---
const TERRAIN_VS = `#version 300 es
layout(location = 0) in vec3 a_position; // (x, y, elevation)
layout(location = 1) in vec3 a_normal;
layout(location = 2) in vec4 a_color;
layout(location = 3) in float a_tileType;

uniform mat4 u_viewProjection;
uniform float u_time;

out vec3 v_worldPos;
out vec3 v_normal;
out vec4 v_color;
out float v_tileType;

void main() {
    vec3 pos = a_position;

    // Animated water caustics wave distortion
    if (a_tileType == 1.0 || a_tileType == 2.0) {
        pos.z += sin(pos.x * 0.45 + u_time * 2.2) * 0.12 + cos(pos.y * 0.45 + u_time * 1.8) * 0.08;
    } else if (a_tileType == 11.0) {
        // Molten lava pulse
        pos.z += sin(pos.x * 0.3 + pos.y * 0.3 + u_time * 3.0) * 0.1;
    }

    v_worldPos = pos;
    v_normal = a_normal;
    v_color = a_color;
    v_tileType = a_tileType;

    gl_Position = u_viewProjection * vec4(pos, 1.0);
}
`;

const TERRAIN_FS = `#version 300 es
precision highp float;

in vec3 v_worldPos;
in vec3 v_normal;
in vec4 v_color;
in float v_tileType;

uniform vec3 u_lightDir;
uniform vec3 u_viewPos;
uniform vec3 u_skyFogColor;
uniform float u_time;

out vec4 fragColor;

void main() {
    vec3 normal = normalize(v_normal);
    vec3 lightDir = normalize(u_lightDir);
    vec3 viewDir = normalize(u_viewPos - v_worldPos);

    // Lambertian Diffuse Lighting
    float diff = max(dot(normal, lightDir), 0.0);
    float ambient = 0.44;
    float light = ambient + diff * 0.56;

    vec3 baseColor = v_color.rgb;

    // Slope-based Craggy Cliff Rock Striations
    float slope = clamp(1.0 - normal.z, 0.0, 1.0);
    if (slope > 0.22 && v_tileType != 1.0 && v_tileType != 2.0 && v_tileType != 11.0 && v_tileType != 36.0) {
        float strata = sin(v_worldPos.z * 18.0) * 0.12 + sin(v_worldPos.x * 3.5 + v_worldPos.y * 3.5) * 0.07;
        vec3 cliffRock = vec3(0.24, 0.24, 0.28) + vec3(strata);
        float cliffFactor = smoothstep(0.22, 0.65, slope);
        baseColor = mix(baseColor, cliffRock, cliffFactor);
    }

    // Coastal Water / Shoreline Wave Surf Foam
    if (v_worldPos.z >= 0.75 && v_worldPos.z <= 1.55 && (v_tileType == 2.0 || v_tileType == 3.0 || v_tileType == 36.0)) {
        float foamWave = sin(u_time * 4.0 + v_worldPos.x * 2.6 + v_worldPos.y * 2.6);
        if (foamWave > 0.42) {
            baseColor = mix(baseColor, vec3(0.88, 0.96, 1.0), 0.65);
        }
    }

    // Specular dynamic wave ripples & Fresnel highlights on water / crystal / ice / coral
    if (v_tileType == 1.0 || v_tileType == 2.0 || v_tileType == 10.0 || v_tileType == 22.0 || v_tileType == 36.0 || v_tileType == 39.0) {
        float r1 = sin(u_time * 3.4 + v_worldPos.x * 1.8 + v_worldPos.y * 1.2);
        float r2 = cos(u_time * 2.7 - v_worldPos.x * 1.3 + v_worldPos.y * 1.9);
        vec3 rippleNormal = normalize(normal + vec3(r1 * 0.14, r2 * 0.14, 0.0));
        vec3 reflectDir = reflect(-lightDir, rippleNormal);
        float spec = pow(max(dot(viewDir, reflectDir), 0.0), 38.0);
        float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 3.2);
        baseColor = mix(baseColor, vec3(0.55, 0.85, 1.0), fresnel * 0.45);
        baseColor += vec3(0.85, 0.95, 1.0) * (spec * 0.95);
    }

    // Molten Lava Glow & Caldera Veins
    if (v_tileType == 11.0 || v_tileType == 40.0) {
        float pulse = sin(u_time * 4.0 + v_worldPos.x * 0.25 + v_worldPos.y * 0.25) * 0.2 + 0.9;
        baseColor *= pulse * 1.35;
        light = max(light, 0.9); // Self-illuminated
    }

    // Radioactive Acid Sizzle Glow
    if (v_tileType == 12.0) {
        baseColor *= (sin(u_time * 5.0) * 0.12 + 0.95);
        light = max(light, 0.8);
    }

    // Bioluminescent Mushroom Spore Glow (tile 38)
    if (v_tileType == 38.0) {
        float mGlow = sin(u_time * 3.5 + v_worldPos.x * 0.5) * 0.25 + 0.9;
        baseColor += vec3(0.18, 0.05, 0.26) * mGlow;
        light = max(light, 0.82);
    }

    // Aether Crystal refraction (tile 39)
    if (v_tileType == 39.0) {
        float shimmer = sin(u_time * 6.0 + v_worldPos.y * 0.8) * 0.25 + 0.95;
        baseColor += vec3(0.16, 0.28, 0.38) * shimmer;
        light = max(light, 0.84);
    }

    // Prehistoric Tar Pit gloss (tile 37)
    if (v_tileType == 37.0) {
        vec3 reflectDir = reflect(-lightDir, normal);
        float tarSpec = pow(max(dot(viewDir, reflectDir), 0.0), 45.0);
        baseColor += vec3(0.2, 0.15, 0.25) * tarSpec;
    }

    // High mountain snow caps
    if (v_worldPos.z > 14.0 && normal.z > 0.55 && (v_tileType == 8.0 || v_tileType == 9.0)) {
        float snowBlend = smoothstep(14.0, 20.0, v_worldPos.z);
        baseColor = mix(baseColor, vec3(0.92, 0.95, 1.0), snowBlend * 0.85);
    }

    // Multi-tier Crevice Ambient Occlusion
    float ao = clamp((v_worldPos.z + 0.6) / 3.2, 0.58, 1.0);
    light *= ao;

    vec3 finalColor = baseColor * light;

    // Atmospheric distance fog blending seamlessly into dynamic celestial sky dome
    float dist = length(u_viewPos - v_worldPos);
    float fogFactor = clamp((dist - 75.0) / 440.0, 0.0, 0.88);
    finalColor = mix(finalColor, u_skyFogColor, fogFactor);

    fragColor = vec4(finalColor, v_color.a);
}
`;

// Instanced Billboard Quad Shader for 3D Sprites, Weapons, Health Bars & Particles
const BILLBOARD_VS = `#version 300 es
layout(location = 0) in vec2 a_quadCorner; // (-1..1, -1..1)
layout(location = 1) in vec3 a_worldPos;
layout(location = 2) in vec2 a_size;
layout(location = 3) in vec4 a_color;
layout(location = 4) in vec4 a_texCoords; // (u0, v0, u1, v1)
layout(location = 5) in float a_rotation;

uniform mat4 u_viewProjection;
uniform mat4 u_viewMatrix;
uniform vec3 u_cameraRight;
uniform vec3 u_cameraUp;

out vec2 v_uv;
out vec4 v_color;

void main() {
    float cosR = cos(a_rotation);
    float sinR = sin(a_rotation);
    vec2 rotatedCorner = vec2(
        a_quadCorner.x * cosR - a_quadCorner.y * sinR,
        a_quadCorner.x * sinR + a_quadCorner.y * cosR
    );

    vec3 pos = a_worldPos +
               u_cameraRight * (rotatedCorner.x * a_size.x * 0.5) +
               u_cameraUp * (rotatedCorner.y * a_size.y * 0.5);

    v_uv = mix(a_texCoords.xy, a_texCoords.zw, a_quadCorner * 0.5 + 0.5);
    v_color = a_color;

    gl_Position = u_viewProjection * vec4(pos, 1.0);
}
`;

const BILLBOARD_FS = `#version 300 es
precision highp float;

in vec2 v_uv;
in vec4 v_color;

uniform sampler2D u_spriteTexture;

out vec4 fragColor;

void main() {
    vec4 texColor = texture(u_spriteTexture, v_uv);
    if (texColor.a < 0.05) discard;
    fragColor = texColor * v_color;
}
`;

// --- Renderer3D Class ---
class Renderer3D {
    constructor(canvas) {
        this.canvas = canvas;
        this.gl = canvas.getContext('webgl2', {
            antialias: true,
            alpha: false,
            depth: true,
            stencil: false,
            powerPreference: 'high-performance'
        });

        if (!this.gl) {
            console.warn("WebGL 2.0 not supported in this browser. 3D mode fallback disabled.");
            return;
        }

        const gl = this.gl;
        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

        // 3D Camera Setup
        this.camera = {
            target: [160, 90, 2.5],
            yaw: 0.785,    // 45 degrees azimuth
            pitch: 0.95,   // ~55 degrees polar tilt from horizon
            distance: 120, // distance from target
            minDistance: 12,
            maxDistance: 450,
            fov: 48 * Math.PI / 180,
            eye: [0, 0, 0],
            up: [0, 0, 1],
            forward: [0, 0, 0],
            right: [0, 0, 0],
            viewProj: Mat4.create(),
            invViewProj: Mat4.create(),
            viewMat: Mat4.create(),
            projMat: Mat4.create()
        };

        this.animTime = 0;
        this.sunLightDir = [0.65, -0.75, 1.3];

        // Compile Shader Programs
        this.terrainProgram = this.createShaderProgram(TERRAIN_VS, TERRAIN_FS);
        this.billboardProgram = this.createShaderProgram(BILLBOARD_VS, BILLBOARD_FS);

        // Terrain Geometry Buffers
        this.terrainVAO = gl.createVertexArray();
        this.terrainVBO = gl.createBuffer();
        this.terrainIBO = gl.createBuffer();
        this.terrainVertexCount = 0;
        this.terrainIndexCount = 0;
        this.lastWorldW = 0;
        this.lastWorldH = 0;
        this.lastElevationHash = 0;

        // Dynamic Entity/Particle Billboard Buffers
        this.initBillboardBuffers();

        // 2048x2048 Texture Atlas for 64x64 Procedural Pixel-Art Creature Sprites
        this.spriteCanvas = document.createElement('canvas');
        this.spriteCanvas.width = 2048;
        this.spriteCanvas.height = 2048;
        this.spriteCtx = this.spriteCanvas.getContext('2d');
        this.spriteTexture = gl.createTexture();
        this.utilityUVs = {};
        this.weaponUVs = {};
        this.spriteUVs = {};

        // Generate and Upload Texture Atlas
        this.initSpriteAtlas();

        // Color Hex to RGBA cache
        this.colorCache = new Map();

        // Mouse Drag / Orbit State
        this.isOrbiting = false;
        this.isPanning = false;
        this.lastMouseX = 0;
        this.lastMouseY = 0;

        // First-Person Control Mode State
        this.isFirstPerson = false;
        this.possessedEntity = null;
    }

    setFirstPerson(active, entity = null) {
        this.isFirstPerson = !!active;
        this.possessedEntity = entity;
        if (this.isFirstPerson && entity) {
            this.camera.yaw = (entity.facingLeft ? -Math.PI / 2 : Math.PI / 2);
            this.camera.pitch = 0.05;
        }
    }

    createShader(type, source) {
        const gl = this.gl;
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error("Shader compile error:", gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    createShaderProgram(vsSource, fsSource) {
        const gl = this.gl;
        const vs = this.createShader(gl.VERTEX_SHADER, vsSource);
        const fs = this.createShader(gl.FRAGMENT_SHADER, fsSource);
        const prog = gl.createProgram();
        gl.attachShader(prog, vs);
        gl.attachShader(prog, fs);
        gl.linkProgram(prog);
        if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
            console.error("Program link error:", gl.getProgramInfoLog(prog));
            return null;
        }
        return prog;
    }

    initBillboardBuffers() {
        const gl = this.gl;
        this.billboardVAO = gl.createVertexArray();
        gl.bindVertexArray(this.billboardVAO);

        // Quad corners (-1..1)
        const quadVertices = new Float32Array([
            -1, -1,
             1, -1,
            -1,  1,
            -1,  1,
             1, -1,
             1,  1
        ]);
        const quadVBO = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, quadVBO);
        gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.STATIC_DRAW);
        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

        // Instanced billboard attributes buffer
        // Layout:
        // loc 1: a_worldPos (vec3)
        // loc 2: a_size (vec2)
        // loc 3: a_color (vec4)
        // loc 4: a_texCoords (vec4: u0, v0, u1, v1)
        // loc 5: a_rotation (float)
        // Stride: 3 + 2 + 4 + 4 + 1 = 14 floats = 56 bytes
        this.instanceMaxCount = 16384;
        this.instanceStrideFloats = 14;
        this.instanceData = new Float32Array(this.instanceMaxCount * this.instanceStrideFloats);

        this.instanceVBO = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.instanceVBO);
        gl.bufferData(gl.ARRAY_BUFFER, this.instanceData.byteLength, gl.DYNAMIC_DRAW);

        const strideBytes = this.instanceStrideFloats * 4;

        // loc 1: a_worldPos (vec3)
        gl.enableVertexAttribArray(1);
        gl.vertexAttribPointer(1, 3, gl.FLOAT, false, strideBytes, 0);
        gl.vertexAttribDivisor(1, 1);

        // loc 2: a_size (vec2)
        gl.enableVertexAttribArray(2);
        gl.vertexAttribPointer(2, 2, gl.FLOAT, false, strideBytes, 3 * 4);
        gl.vertexAttribDivisor(2, 1);

        // loc 3: a_color (vec4)
        gl.enableVertexAttribArray(3);
        gl.vertexAttribPointer(3, 4, gl.FLOAT, false, strideBytes, 5 * 4);
        gl.vertexAttribDivisor(3, 1);

        // loc 4: a_texCoords (vec4)
        gl.enableVertexAttribArray(4);
        gl.vertexAttribPointer(4, 4, gl.FLOAT, false, strideBytes, 9 * 4);
        gl.vertexAttribDivisor(4, 1);

        // loc 5: a_rotation (float)
        gl.enableVertexAttribArray(5);
        gl.vertexAttribPointer(5, 1, gl.FLOAT, false, strideBytes, 13 * 4);
        gl.vertexAttribDivisor(5, 1);

        gl.bindVertexArray(null);
    }

    initSpriteAtlas() {
        const ctx = this.spriteCtx;
        const gl = this.gl;
        ctx.clearRect(0, 0, 2048, 2048);

        const getCellUV = (col, row) => {
            const padding = 1.0;
            return {
                u0: (col * 64 + padding) / 2048,
                v0: (row * 64 + padding) / 2048,
                u1: ((col + 1) * 64 - padding) / 2048,
                v1: ((row + 1) * 64 - padding) / 2048
            };
        };

        // 1. Draw Utility Sprites into Row 0
        this.drawUtilitySprites(ctx);
        this.utilityUVs = {
            shadow: getCellUV(0, 0),
            white_quad: getCellUV(1, 0),
            star: getCellUV(2, 0),
            reticle: getCellUV(3, 0),
            blessed: getCellUV(4, 0),
            cursed: getCellUV(5, 0),
            frozen: getCellUV(6, 0),
            thorny: getCellUV(7, 0),
            starlight: getCellUV(8, 0),
            alert: getCellUV(9, 0),
            skull: getCellUV(10, 0),
            heart: getCellUV(11, 0),
            defaultSprite: getCellUV(26, 0)
        };

        // 2. Draw Weapon Sprites into Row 0 (cols 12..25)
        this.drawWeaponSprites(ctx);
        const weaponNames = [
            'sword', 'bow', 'staff', 'laser_cannon', 'hammer', 'axe',
            'plasma_rifle', 'spear', 'energy_shield', 'poison_dagger', 'void_scythe', 'galaxy_blade',
            'death_scythe', 'frost_bow'
        ];
        this.weaponUVs = {};
        for (let i = 0; i < weaponNames.length; i++) {
            this.weaponUVs[weaponNames[i]] = getCellUV(12 + i, 0);
        }
        // Aliases
        this.weaponUVs['blaster'] = this.weaponUVs['laser_cannon'];
        this.weaponUVs['fire_staff'] = this.weaponUVs['staff'];

        // 3. Draw Default Sprite in Row 0 cols 26 & 27
        this.drawSpeciesSprite(ctx, 'default', 26 * 64 + 32, 32, 0);
        this.drawSpeciesSprite(ctx, 'default', 27 * 64 + 32, 32, 1);

        // 4. Draw All 63 Species into Rows 1..4 (2 frames each: Frame 0 and Frame 1)
        const speciesList = ["crabzilla","kaiju","phoenix","kraken","hydra","frost_titan","galaxy_guardian","colossus_mech","seraph_angel","dune_leviathan","vampire_lord","void_titan","evermean","tank","warship","helicopter","starfighter","mech","wizard","human","elf","orc","dwarf","sheep","cow","wolf","bear","dragon","golem","zombie","skeleton","demon","alien","duck","crystal_golem","shadow_assassin","frog","cyber_ninja","laser_shark","frost_wolf","sand_scorpion","necromancer","valkyrie","gargoyle","mecha_rex","golden_dragon","space_worm","goblin","pirate_ship","trex","triceratops","velociraptor","pterodactyl","brachiosaurus","frost_dragon","shadow_dragon","storm_dragon","dark_matter_colossus","phoenix_knight","thunder_bird","cyber_dragon","swamp_behemoth","mammoth","astral_phoenix","frost_giant","dread_reaper","dune_scorpion_king","titan_golem","pegasus","solar_phoenix","frost_wyrm","iron_behemoth","celestial_archon","shadow_stalker","deep_leviathan","volcanic_drake","storm_valkyrie","mecha_colossus","astral_unicorn","chronomancer","spectral_knight","sand_reaper","forest_ancient","plague_bringer","crystal_scorpion","thunder_hawk","magma_elemental","frost_banshee","dune_crawler","void_horror","sun_warrior","abyssal_kraken_spawn","runic_golem","cyber_hound","blood_fiend","titan_dreadnought","steampunk_airship","quantum_mech","cosmic_dragon"];
        this.spriteUVs = {};

        for (let i = 0; i < speciesList.length; i++) {
            const sp = speciesList[i];
            const slot = i * 2;
            const col0 = slot % 32;
            const row = 1 + Math.floor(slot / 32);
            const col1 = col0 + 1;

            const cx0 = col0 * 64 + 32;
            const cy0 = row * 64 + 32;
            const cx1 = col1 * 64 + 32;
            const cy1 = row * 64 + 32;

            // Frame 0: idle / step left / wings up
            this.drawSpeciesSprite(ctx, sp, cx0, cy0, 0);
            // Frame 1: walk / step right / wings down
            this.drawSpeciesSprite(ctx, sp, cx1, cy1, 1);

            this.spriteUVs[sp] = [getCellUV(col0, row), getCellUV(col1, row)];
        }

        // Upload to WebGL Texture with gl.NEAREST for crisp retro pixel art
        gl.bindTexture(gl.TEXTURE_2D, this.spriteTexture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.spriteCanvas);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.bindTexture(gl.TEXTURE_2D, null);
    }

    // --- Procedural 64x64 Sprite Pixel-Art Generators ---
    drawUtilitySprites(ctx) {
        const cellSize = 64;

        // Slot (0, 0): Soft Radial Gradient Drop Shadow
        {
            const cx = 32, cy = 32;
            const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 26);
            grad.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
            grad.addColorStop(0.45, 'rgba(255, 255, 255, 0.75)');
            grad.addColorStop(0.75, 'rgba(255, 255, 255, 0.3)');
            grad.addColorStop(1.0, 'rgba(255, 255, 255, 0.0)');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(cx, cy, 26, 0, Math.PI * 2);
            ctx.fill();
        }

        // Slot (1, 0): Solid White Quad (Health bars, reticles, UI blocks)
        {
            const cx = 64 + 32, cy = 32;
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(cx - 28, cy - 28, 56, 56);
        }

        // Slot (2, 0): Level / Boss Golden Crown Star
        {
            const cx = 128 + 32, cy = 32;
            ctx.fillStyle = '#f59e0b'; // Gold border
            for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 4) {
                ctx.fillRect(cx + Math.cos(angle) * 14 - 3, cy + Math.sin(angle) * 14 - 3, 6, 6);
            }
            ctx.fillStyle = '#facc15';
            ctx.beginPath();
            for (let i = 0; i < 5; i++) {
                const aOuter = i * Math.PI * 2 / 5 - Math.PI / 2;
                const aInner = aOuter + Math.PI / 5;
                ctx.lineTo(cx + Math.cos(aOuter) * 20, cy + Math.sin(aOuter) * 20);
                ctx.lineTo(cx + Math.cos(aInner) * 9, cy + Math.sin(aInner) * 9);
            }
            ctx.closePath();
            ctx.fill();
            // Star center glint
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(cx - 2, cy - 4, 4, 4);
        }

        // Slot (3, 0): Possession Reticle / Targeting Beacon
        {
            const cx = 192 + 32, cy = 32;
            ctx.strokeStyle = '#38bdf8';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(cx, cy, 22, 0, Math.PI * 2);
            ctx.stroke();
            // Reticle crosshair ticks
            ctx.fillStyle = '#facc15';
            ctx.fillRect(cx - 2, cy - 27, 4, 8);
            ctx.fillRect(cx - 2, cy + 19, 4, 8);
            ctx.fillRect(cx - 27, cy - 2, 8, 4);
            ctx.fillRect(cx + 19, cy - 2, 8, 4);
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(cx - 2, cy - 2, 4, 4);
        }

        // Slot (4, 0): Blessed Golden Sun Halo
        {
            const cx = 256 + 32, cy = 32;
            ctx.strokeStyle = '#facc15';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(cx, cy, 18, 0, Math.PI * 2);
            ctx.stroke();
            ctx.fillStyle = '#fef08a';
            for (let i = 0; i < 8; i++) {
                const ang = i * Math.PI / 4;
                ctx.fillRect(cx + Math.cos(ang) * 22 - 2, cy + Math.sin(ang) * 22 - 2, 4, 4);
            }
        }

        // Slot (5, 0): Cursed Void Shadow Rune
        {
            const cx = 320 + 32, cy = 32;
            ctx.strokeStyle = '#9333ea';
            ctx.lineWidth = 3;
            ctx.strokeRect(cx - 18, cy - 18, 36, 36);
            ctx.fillStyle = '#c084fc';
            ctx.fillRect(cx - 12, cy - 12, 24, 24);
            ctx.fillStyle = '#1e1b4b';
            ctx.fillRect(cx - 6, cy - 6, 12, 12);
        }

        // Slot (6, 0): Glacial Ice Crystal Overlay
        {
            const cx = 384 + 32, cy = 32;
            ctx.fillStyle = '#a5f3fc';
            ctx.beginPath();
            ctx.moveTo(cx, cy - 24);
            ctx.lineTo(cx + 16, cy);
            ctx.lineTo(cx, cy + 24);
            ctx.lineTo(cx - 16, cy);
            ctx.closePath();
            ctx.fill();
            ctx.strokeStyle = '#38bdf8';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(cx - 3, cy - 8, 6, 16);
        }

        // Slot (7, 0): Thorny Ring
        {
            const cx = 448 + 32, cy = 32;
            ctx.strokeStyle = '#15803d';
            ctx.lineWidth = 3;
            ctx.strokeRect(cx - 18, cy - 18, 36, 36);
            ctx.fillStyle = '#4ade80';
            for (let i = -18; i <= 18; i += 9) {
                ctx.fillRect(cx + i - 2, cy - 24, 4, 6);
                ctx.fillRect(cx + i - 2, cy + 18, 4, 6);
                ctx.fillRect(cx - 24, cy + i - 2, 6, 4);
                ctx.fillRect(cx + 18, cy + i - 2, 6, 4);
            }
        }

        // Slot (8, 0): Starlight Sparkling Diamond
        {
            const cx = 512 + 32, cy = 32;
            ctx.fillStyle = '#38bdf8';
            ctx.beginPath();
            ctx.moveTo(cx, cy - 24);
            ctx.lineTo(cx + 6, cy - 6);
            ctx.lineTo(cx + 24, cy);
            ctx.lineTo(cx + 6, cy + 6);
            ctx.lineTo(cx, cy + 24);
            ctx.lineTo(cx - 6, cy + 6);
            ctx.lineTo(cx - 24, cy);
            ctx.lineTo(cx - 6, cy - 6);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(cx - 3, cy - 3, 6, 6);
        }

        // Slot (9, 0): Aggro Warning Exclamation
        {
            const cx = 576 + 32, cy = 32;
            ctx.fillStyle = '#ef4444';
            ctx.beginPath();
            ctx.moveTo(cx, cy - 22);
            ctx.lineTo(cx + 20, cy + 18);
            ctx.lineTo(cx - 20, cy + 18);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(cx - 2.5, cy - 10, 5, 14);
            ctx.fillRect(cx - 2.5, cy + 8, 5, 5);
        }

        // Slot (10, 0): Skull Icon
        {
            const cx = 640 + 32, cy = 32;
            ctx.fillStyle = '#f8fafc';
            ctx.fillRect(cx - 14, cy - 16, 28, 20);
            ctx.fillRect(cx - 8, cy + 4, 16, 10);
            ctx.fillStyle = '#0f172a';
            ctx.fillRect(cx - 10, cy - 8, 6, 8);
            ctx.fillRect(cx + 4, cy - 8, 6, 8);
            ctx.fillRect(cx - 2, cy + 2, 4, 4);
            ctx.fillRect(cx - 6, cy + 8, 3, 6);
            ctx.fillRect(cx + 3, cy + 8, 3, 6);
        }

        // Slot (11, 0): Heart Icon
        {
            const cx = 704 + 32, cy = 32;
            ctx.fillStyle = '#ef4444';
            ctx.beginPath();
            ctx.moveTo(cx, cy + 18);
            ctx.bezierCurveTo(cx - 20, cy + 4, cx - 20, cy - 16, cx - 8, cy - 16);
            ctx.bezierCurveTo(cx - 2, cy - 16, cx, cy - 8, cx, cy - 6);
            ctx.bezierCurveTo(cx, cy - 8, cx + 2, cy - 16, cx + 8, cy - 16);
            ctx.bezierCurveTo(cx + 20, cy - 16, cx + 20, cy + 4, cx, cy + 18);
            ctx.fill();
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(cx - 12, cy - 12, 4, 6);
        }
    }

    drawWeaponSprites(ctx) {
        // Weapons live in Row 0, cols 12..23
        // 12: sword
        {
            const cx = 12 * 64 + 32, cy = 32;
            // Blade
            ctx.fillStyle = '#e2e8f0';
            ctx.fillRect(cx - 2, cy - 22, 5, 26);
            ctx.fillStyle = '#94a3b8';
            ctx.fillRect(cx + 1, cy - 22, 2, 26);
            // Tip
            ctx.fillStyle = '#f8fafc';
            ctx.beginPath(); ctx.moveTo(cx - 2, cy - 22); ctx.lineTo(cx + 0.5, cy - 27); ctx.lineTo(cx + 3, cy - 22); ctx.fill();
            // Crossguard
            ctx.fillStyle = '#f59e0b';
            ctx.fillRect(cx - 10, cy + 4, 21, 5);
            // Hilt
            ctx.fillStyle = '#78350f';
            ctx.fillRect(cx - 2, cy + 9, 5, 10);
            // Pommel
            ctx.fillStyle = '#f59e0b';
            ctx.fillRect(cx - 4, cy + 19, 9, 5);
        }

        // 13: bow
        {
            const cx = 13 * 64 + 32, cy = 32;
            // Bow stave (curved wood)
            ctx.strokeStyle = '#92400e';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.arc(cx - 4, cy, 22, -Math.PI * 0.42, Math.PI * 0.42);
            ctx.stroke();
            // String
            ctx.strokeStyle = '#f8fafc';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(cx + 5, cy - 19);
            ctx.lineTo(cx - 4, cy);
            ctx.lineTo(cx + 5, cy + 19);
            ctx.stroke();
            // Arrow
            ctx.fillStyle = '#d97706';
            ctx.fillRect(cx - 12, cy - 1.5, 26, 3);
            ctx.fillStyle = '#94a3b8';
            ctx.beginPath(); ctx.moveTo(cx + 14, cy - 4); ctx.lineTo(cx + 20, cy); ctx.lineTo(cx + 14, cy + 4); ctx.fill();
        }

        // 14: staff
        {
            const cx = 14 * 64 + 32, cy = 32;
            // Shaft
            ctx.fillStyle = '#78350f';
            ctx.fillRect(cx - 2, cy - 14, 5, 38);
            // Crystal head
            ctx.fillStyle = '#38bdf8';
            ctx.beginPath();
            ctx.arc(cx + 0.5, cy - 18, 9, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(cx - 2, cy - 21, 4, 4);
            // Prongs
            ctx.fillStyle = '#f59e0b';
            ctx.fillRect(cx - 7, cy - 16, 3, 8);
            ctx.fillRect(cx + 5, cy - 16, 3, 8);
        }

        // 15: laser_cannon
        {
            const cx = 15 * 64 + 32, cy = 32;
            // Chassis
            ctx.fillStyle = '#334155';
            ctx.fillRect(cx - 14, cy - 8, 28, 16);
            ctx.fillStyle = '#1e293b';
            ctx.fillRect(cx - 8, cy - 12, 16, 6);
            // Dual Barrels
            ctx.fillStyle = '#64748b';
            ctx.fillRect(cx + 10, cy - 6, 14, 4);
            ctx.fillRect(cx + 10, cy + 2, 14, 4);
            // Glowing Energy Cells
            ctx.fillStyle = '#06b6d4';
            ctx.fillRect(cx - 6, cy - 4, 12, 8);
            ctx.fillStyle = '#67e8f9';
            ctx.fillRect(cx - 4, cy - 2, 8, 4);
        }

        // 16: hammer
        {
            const cx = 16 * 64 + 32, cy = 32;
            // Shaft
            ctx.fillStyle = '#78350f';
            ctx.fillRect(cx - 2, cy - 8, 5, 34);
            // Head
            ctx.fillStyle = '#475569';
            ctx.fillRect(cx - 16, cy - 24, 33, 18);
            ctx.fillStyle = '#94a3b8';
            ctx.fillRect(cx - 14, cy - 22, 29, 4);
            ctx.fillStyle = '#334155';
            ctx.fillRect(cx - 16, cy - 16, 33, 2);
        }

        // 17: axe
        {
            const cx = 17 * 64 + 32, cy = 32;
            // Shaft
            ctx.fillStyle = '#92400e';
            ctx.fillRect(cx - 2, cy - 12, 5, 38);
            // Crescent Double Blade
            ctx.fillStyle = '#94a3b8';
            ctx.beginPath();
            ctx.moveTo(cx - 2, cy - 18);
            ctx.quadraticCurveTo(cx - 20, cy - 18, cx - 18, cy);
            ctx.quadraticCurveTo(cx - 20, cy + 6, cx - 2, cy + 2);
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(cx + 3, cy - 18);
            ctx.quadraticCurveTo(cx + 20, cy - 18, cx + 18, cy);
            ctx.quadraticCurveTo(cx + 20, cy + 6, cx + 3, cy + 2);
            ctx.fill();
            // Edge
            ctx.fillStyle = '#f8fafc';
            ctx.fillRect(cx - 19, cy - 14, 3, 14);
            ctx.fillRect(cx + 17, cy - 14, 3, 14);
        }

        // 18: plasma_rifle
        {
            const cx = 18 * 64 + 32, cy = 32;
            ctx.fillStyle = '#1e293b';
            ctx.fillRect(cx - 18, cy - 5, 36, 10);
            ctx.fillStyle = '#0f172a';
            ctx.fillRect(cx - 16, cy + 5, 8, 10); // Stock
            ctx.fillRect(cx - 4, cy + 5, 5, 8); // Grip
            // Plasma coil
            ctx.fillStyle = '#22c55e';
            ctx.fillRect(cx - 6, cy - 7, 16, 4);
            ctx.fillStyle = '#4ade80';
            ctx.fillRect(cx - 4, cy - 6, 12, 2);
            ctx.fillStyle = '#10b981';
            ctx.fillRect(cx + 16, cy - 2, 8, 4); // Muzzle
        }

        // 19: spear
        {
            const cx = 19 * 64 + 32, cy = 32;
            ctx.fillStyle = '#78350f';
            ctx.fillRect(cx - 1.5, cy - 10, 4, 38);
            // Leaf spearhead
            ctx.fillStyle = '#cbd5e1';
            ctx.beginPath();
            ctx.moveTo(cx + 0.5, cy - 26);
            ctx.lineTo(cx + 7, cy - 14);
            ctx.lineTo(cx + 0.5, cy - 10);
            ctx.lineTo(cx - 6, cy - 14);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = '#f8fafc';
            ctx.fillRect(cx - 0.5, cy - 24, 2, 14);
        }

        // 20: energy_shield
        {
            const cx = 20 * 64 + 32, cy = 32;
            ctx.fillStyle = 'rgba(56, 189, 248, 0.7)';
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const ang = i * Math.PI / 3;
                ctx.lineTo(cx + Math.cos(ang) * 20, cy + Math.sin(ang) * 20);
            }
            ctx.closePath();
            ctx.fill();
            ctx.strokeStyle = '#0284c7';
            ctx.lineWidth = 3;
            ctx.stroke();
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(cx - 4, cy - 4, 8, 8);
        }

        // 21: poison_dagger
        {
            const cx = 21 * 64 + 32, cy = 32;
            // Blade
            ctx.fillStyle = '#1e293b';
            ctx.beginPath();
            ctx.moveTo(cx, cy - 22);
            ctx.quadraticCurveTo(cx - 8, cy - 10, cx - 2, cy + 4);
            ctx.lineTo(cx + 3, cy + 4);
            ctx.quadraticCurveTo(cx + 4, cy - 10, cx, cy - 22);
            ctx.fill();
            // Venom drip
            ctx.fillStyle = '#84cc16';
            ctx.fillRect(cx - 2, cy - 14, 4, 12);
            ctx.fillRect(cx - 1, cy - 20, 2, 6);
            // Hilt
            ctx.fillStyle = '#475569';
            ctx.fillRect(cx - 6, cy + 4, 13, 4);
            ctx.fillStyle = '#15803d';
            ctx.fillRect(cx - 2, cy + 8, 5, 8);
        }

        // 22: void_scythe
        {
            const cx = 22 * 64 + 32, cy = 32;
            // Pole
            ctx.fillStyle = '#18181b';
            ctx.fillRect(cx - 2, cy - 16, 4, 42);
            // Scythe blade
            ctx.fillStyle = '#7e22ce';
            ctx.beginPath();
            ctx.moveTo(cx, cy - 16);
            ctx.bezierCurveTo(cx + 24, cy - 26, cx + 24, cy - 4, cx + 6, cy + 4);
            ctx.lineTo(cx + 6, cy);
            ctx.bezierCurveTo(cx + 18, cy - 6, cx + 18, cy - 20, cx, cy - 14);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = '#d8b4fe';
            ctx.fillRect(cx + 4, cy - 18, 12, 2);
        }

        // 23: galaxy_blade
        {
            const cx = 23 * 64 + 32, cy = 32;
            ctx.fillStyle = '#9333ea';
            ctx.fillRect(cx - 3, cy - 24, 7, 28);
            ctx.fillStyle = '#38bdf8';
            ctx.fillRect(cx - 1, cy - 24, 3, 28);
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(cx, cy - 26, 1, 24);
            // Star crossguard
            ctx.fillStyle = '#facc15';
            ctx.fillRect(cx - 12, cy + 4, 25, 5);
            ctx.fillStyle = '#a855f7';
            ctx.fillRect(cx - 2, cy + 9, 5, 10);
            ctx.fillStyle = '#38bdf8';
            ctx.fillRect(cx - 3, cy + 19, 7, 5);
        }

        // 24: death_scythe
        {
            const cx = 24 * 64 + 32, cy = 32;
            // Pole (dark bone obsidian)
            ctx.fillStyle = '#0f172a';
            ctx.fillRect(cx - 2, cy - 18, 4, 44);
            ctx.fillStyle = '#334155';
            ctx.fillRect(cx - 1, cy - 18, 2, 44);
            // Bone ribs
            ctx.fillStyle = '#cbd5e1';
            ctx.fillRect(cx - 4, cy - 6, 8, 3);
            ctx.fillRect(cx - 4, cy + 6, 8, 3);
            // Curved razor blade
            ctx.fillStyle = '#1e293b';
            ctx.beginPath();
            ctx.moveTo(cx, cy - 18);
            ctx.bezierCurveTo(cx + 26, cy - 28, cx + 26, cy - 2, cx + 8, cy + 8);
            ctx.lineTo(cx + 6, cy + 4);
            ctx.bezierCurveTo(cx + 20, cy - 4, cx + 20, cy - 22, cx, cy - 16);
            ctx.closePath();
            ctx.fill();
            // Necrotic venom edge
            ctx.fillStyle = '#22c55e';
            ctx.fillRect(cx + 6, cy - 20, 14, 2);
            ctx.fillRect(cx + 12, cy - 18, 10, 3);
            ctx.fillStyle = '#86efac';
            ctx.fillRect(cx + 16, cy - 16, 4, 2);
        }

        // 25: frost_bow
        {
            const cx = 25 * 64 + 32, cy = 32;
            // Glacial Stave (crystalline ice)
            ctx.strokeStyle = '#0284c7';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.arc(cx - 4, cy, 22, -Math.PI * 0.44, Math.PI * 0.44);
            ctx.stroke();
            // Ice crystal inner rim
            ctx.strokeStyle = '#38bdf8';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(cx - 4, cy, 21, -Math.PI * 0.40, Math.PI * 0.40);
            ctx.stroke();
            // Starlight string
            ctx.strokeStyle = '#e0f2fe';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(cx + 6, cy - 20);
            ctx.lineTo(cx - 4, cy);
            ctx.lineTo(cx + 6, cy + 20);
            ctx.stroke();
            // Frost Arrow
            ctx.fillStyle = '#38bdf8';
            ctx.fillRect(cx - 12, cy - 1.5, 26, 3);
            // Glacial Tip
            ctx.fillStyle = '#bae6fd';
            ctx.beginPath();
            ctx.moveTo(cx + 14, cy - 5);
            ctx.lineTo(cx + 22, cy);
            ctx.lineTo(cx + 14, cy + 5);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(cx + 17, cy - 1, 3, 2);
        }
    }
    
    drawSpeciesSprite(ctx, type, cx, cy, frame) {
        const f = frame; // 0 or 1
        const legBob = f === 1 ? -1 : 1;
        const wingFlap = f === 1 ? -6 : 6;

        switch (type) {
            // --- Humanoid Species ---
            case 'human': {
                ctx.fillStyle = '#1e293b';
                ctx.fillRect(cx - 5, cy + 8 + (f === 0 ? 1 : -1), 4, 8);
                ctx.fillRect(cx + 1, cy + 8 + (f === 1 ? 1 : -1), 4, 8);
                ctx.fillStyle = '#3b82f6';
                ctx.fillRect(cx - 7, cy - 4, 14, 13);
                ctx.fillStyle = '#b45309';
                ctx.fillRect(cx - 7, cy + 5, 14, 3);
                ctx.fillStyle = '#2563eb';
                ctx.fillRect(cx - 10, cy - 2 + (f === 0 ? 1 : -1), 3, 9);
                ctx.fillRect(cx + 7, cy - 2 + (f === 1 ? 1 : -1), 3, 9);
                ctx.fillStyle = '#fed7aa';
                ctx.fillRect(cx - 6, cy - 16, 12, 12);
                ctx.fillStyle = '#78350f';
                ctx.fillRect(cx - 7, cy - 18, 14, 5);
                ctx.fillRect(cx - 7, cy - 15, 3, 6);
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 2, cy - 11, 2, 2);
                break;
            }

            case 'elf': {
                ctx.fillStyle = '#14532d';
                ctx.fillRect(cx - 4, cy + 8 + (f === 0 ? 1 : -1), 3, 8);
                ctx.fillRect(cx + 1, cy + 8 + (f === 1 ? 1 : -1), 3, 8);
                ctx.fillStyle = '#16a34a';
                ctx.fillRect(cx - 6, cy - 4, 12, 13);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 6, cy + 5, 12, 2);
                ctx.fillStyle = '#15803d';
                ctx.fillRect(cx - 9, cy - 2 + (f === 0 ? 1 : -1), 3, 9);
                ctx.fillRect(cx + 6, cy - 2 + (f === 1 ? 1 : -1), 3, 9);
                ctx.fillStyle = '#ffedd5';
                ctx.fillRect(cx - 5, cy - 16, 10, 12);
                ctx.fillRect(cx - 8, cy - 14, 3, 3);
                ctx.fillRect(cx + 5, cy - 14, 3, 3);
                ctx.fillStyle = '#fde047';
                ctx.fillRect(cx - 6, cy - 19, 12, 5);
                ctx.fillRect(cx - 7, cy - 15, 2, 8);
                ctx.fillRect(cx + 5, cy - 15, 2, 8);
                ctx.fillStyle = '#0284c7';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 2, cy - 11, 2, 2);
                break;
            }

            case 'orc': {
                ctx.fillStyle = '#451a03';
                ctx.fillRect(cx - 7, cy + 8 + (f === 0 ? 2 : -2), 5, 9);
                ctx.fillRect(cx + 2, cy + 8 + (f === 1 ? 2 : -2), 5, 9);
                ctx.fillStyle = '#65a30d';
                ctx.fillRect(cx - 9, cy - 5, 18, 14);
                ctx.fillStyle = '#334155';
                ctx.fillRect(cx - 12, cy - 8, 5, 6);
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 11, cy - 11, 2, 3);
                ctx.fillStyle = '#4d7c0f';
                ctx.fillRect(cx - 12, cy - 1 + (f === 0 ? 2 : -2), 4, 10);
                ctx.fillRect(cx + 8, cy - 1 + (f === 1 ? 2 : -2), 4, 10);
                ctx.fillStyle = '#65a30d';
                ctx.fillRect(cx - 7, cy - 18, 14, 13);
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 5, cy - 7, 2, 4);
                ctx.fillRect(cx + 3, cy - 7, 2, 4);
                ctx.fillStyle = '#ef4444';
                ctx.fillRect(cx - 4, cy - 13, 2, 2);
                ctx.fillRect(cx + 2, cy - 13, 2, 2);
                break;
            }

            case 'dwarf': {
                ctx.fillStyle = '#334155';
                ctx.fillRect(cx - 6, cy + 8 + (f === 0 ? 1 : -1), 5, 6);
                ctx.fillRect(cx + 1, cy + 8 + (f === 1 ? 1 : -1), 5, 6);
                ctx.fillStyle = '#64748b';
                ctx.fillRect(cx - 8, cy - 3, 16, 12);
                ctx.fillStyle = '#475569';
                ctx.fillRect(cx - 7, cy - 18, 14, 7);
                ctx.fillStyle = '#e2e8f0';
                ctx.fillRect(cx - 10, cy - 20, 3, 4);
                ctx.fillRect(cx + 7, cy - 20, 3, 4);
                ctx.fillStyle = '#fed7aa';
                ctx.fillRect(cx - 5, cy - 12, 10, 6);
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 3, cy - 10, 2, 2);
                ctx.fillRect(cx + 2, cy - 10, 2, 2);
                ctx.fillStyle = '#ea580c';
                ctx.fillRect(cx - 7, cy - 6, 14, 12);
                ctx.fillRect(cx - 5, cy + 6, 10, 4);
                break;
            }

            case 'wizard': {
                ctx.fillStyle = '#4c1d95';
                ctx.beginPath();
                ctx.moveTo(cx, cy - 8);
                ctx.lineTo(cx - 10, cy + 15 + (f === 0 ? 1 : 0));
                ctx.lineTo(cx + 10, cy + 15 + (f === 1 ? 1 : 0));
                ctx.closePath();
                ctx.fill();
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 9, cy + 13, 18, 2);
                ctx.fillStyle = '#fed7aa';
                ctx.fillRect(cx - 4, cy - 14, 8, 7);
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 4, cy - 7, 8, 10);
                ctx.fillRect(cx - 2, cy + 3, 4, 3);
                ctx.fillStyle = '#38bdf8';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 1, cy - 11, 2, 2);
                ctx.fillStyle = '#6d28d9';
                ctx.fillRect(cx - 9, cy - 15, 18, 3);
                ctx.beginPath();
                ctx.moveTo(cx - 7, cy - 15);
                ctx.lineTo(cx + 1, cy - 28);
                ctx.lineTo(cx + 7, cy - 15);
                ctx.closePath();
                ctx.fill();
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 5, cy - 17, 10, 2);
                break;
            }

            case 'zombie': {
                ctx.fillStyle = '#334155';
                ctx.fillRect(cx - 5, cy + 8 + (f === 0 ? 2 : -2), 4, 8);
                ctx.fillRect(cx + 1, cy + 8 + (f === 1 ? 2 : -2), 4, 8);
                ctx.fillStyle = '#4d7c0f';
                ctx.fillRect(cx - 7, cy - 4, 14, 13);
                ctx.fillStyle = '#581c87';
                ctx.fillRect(cx - 6, cy - 2, 12, 8);
                ctx.fillStyle = '#4d7c0f';
                ctx.fillRect(cx - 11, cy - 6, 4, 12);
                ctx.fillRect(cx + 7, cy - 6, 4, 12);
                ctx.fillStyle = '#65a30d';
                ctx.fillRect(cx - 6, cy - 16, 12, 12);
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 4, cy - 11, 3, 3);
                ctx.fillRect(cx + 1, cy - 11, 3, 3);
                ctx.fillStyle = '#ef4444';
                ctx.fillRect(cx - 3, cy - 10, 1, 1);
                ctx.fillRect(cx + 2, cy - 10, 1, 1);
                break;
            }

            case 'skeleton': {
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 4, cy + 8 + (f === 0 ? 2 : -2), 3, 8);
                ctx.fillRect(cx + 1, cy + 8 + (f === 1 ? 2 : -2), 3, 8);
                ctx.fillRect(cx - 6, cy - 4, 12, 12);
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 4, cy - 2, 8, 2);
                ctx.fillRect(cx - 4, cy + 2, 8, 2);
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 9, cy - 2 + (f === 0 ? 2 : -2), 3, 10);
                ctx.fillRect(cx + 6, cy - 2 + (f === 1 ? 2 : -2), 3, 10);
                ctx.fillRect(cx - 6, cy - 18, 12, 12);
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 4, cy - 13, 3, 4);
                ctx.fillRect(cx + 1, cy - 13, 3, 4);
                ctx.fillRect(cx - 1, cy - 7, 2, 2);
                break;
            }

            case 'demon': {
                ctx.fillStyle = '#7f1d1d';
                ctx.fillRect(cx - 5, cy + 8 + (f === 0 ? 2 : -2), 4, 8);
                ctx.fillRect(cx + 1, cy + 8 + (f === 1 ? 2 : -2), 4, 8);
                ctx.fillStyle = '#450a0a';
                ctx.beginPath();
                ctx.moveTo(cx, cy - 4);
                ctx.lineTo(cx - 18, cy - 14 + wingFlap);
                ctx.lineTo(cx - 12, cy + 4);
                ctx.closePath();
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(cx, cy - 4);
                ctx.lineTo(cx + 18, cy - 14 + wingFlap);
                ctx.lineTo(cx + 12, cy + 4);
                ctx.closePath();
                ctx.fill();
                ctx.fillStyle = '#b91c1c';
                ctx.fillRect(cx - 7, cy - 5, 14, 14);
                ctx.fillRect(cx - 6, cy - 16, 12, 11);
                ctx.fillStyle = '#1e1b4b';
                ctx.fillRect(cx - 9, cy - 22, 4, 8);
                ctx.fillRect(cx + 5, cy - 22, 4, 8);
                ctx.fillStyle = '#fef08a';
                ctx.fillRect(cx - 4, cy - 12, 2, 2);
                ctx.fillRect(cx + 2, cy - 12, 2, 2);
                break;
            }

            case 'alien': {
                ctx.fillStyle = '#64748b';
                ctx.fillRect(cx - 4, cy + 8 + (f === 0 ? 1 : -1), 3, 7);
                ctx.fillRect(cx + 1, cy + 8 + (f === 1 ? 1 : -1), 3, 7);
                ctx.fillRect(cx - 6, cy - 2, 12, 11);
                ctx.fillStyle = '#86efac';
                ctx.beginPath();
                ctx.ellipse(cx, cy - 14, 8, 10, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#0f172a';
                ctx.beginPath();
                ctx.ellipse(cx - 4, cy - 13, 2.5, 4, -0.3, 0, Math.PI * 2);
                ctx.ellipse(cx + 4, cy - 13, 2.5, 4, 0.3, 0, Math.PI * 2);
                ctx.fill();
                break;
            }

            case 'vampire_lord': {
                ctx.fillStyle = '#7f1d1d';
                ctx.fillRect(cx - 12, cy - 12, 24, 24 + (f === 1 ? 2 : 0));
                ctx.fillStyle = '#09090b';
                ctx.fillRect(cx - 10, cy - 8, 20, 22);
                ctx.fillStyle = '#f1f5f9';
                ctx.fillRect(cx - 5, cy - 16, 10, 10);
                ctx.fillStyle = '#09090b';
                ctx.fillRect(cx - 6, cy - 19, 12, 5);
                ctx.fillRect(cx - 6, cy - 16, 2, 7);
                ctx.fillRect(cx + 4, cy - 16, 2, 7);
                ctx.fillStyle = '#ef4444';
                ctx.fillRect(cx - 3, cy - 12, 2, 2);
                ctx.fillRect(cx + 1, cy - 12, 2, 2);
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(cx - 2, cy - 8, 1, 2);
                ctx.fillRect(cx + 1, cy - 8, 1, 2);
                break;
            }

            case 'shadow_assassin': {
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 4, cy + 7 + (f === 0 ? 2 : -2), 3, 8);
                ctx.fillRect(cx + 1, cy + 7 + (f === 1 ? 2 : -2), 3, 8);
                ctx.fillRect(cx - 6, cy - 4, 12, 12);
                ctx.fillStyle = '#1e293b';
                ctx.fillRect(cx - 6, cy - 16, 12, 12);
                ctx.fillStyle = '#38bdf8';
                ctx.fillRect(cx - 4, cy - 12, 3, 1.5);
                ctx.fillRect(cx + 1, cy - 12, 3, 1.5);
                ctx.fillStyle = '#e2e8f0';
                ctx.fillRect(cx - 10, cy - 1 + (f === 0 ? 2 : -2), 2, 8);
                ctx.fillRect(cx + 8, cy - 1 + (f === 1 ? 2 : -2), 2, 8);
                break;
            }

            case 'cyber_ninja': {
                ctx.fillStyle = '#18181b';
                ctx.fillRect(cx - 5, cy + 7 + (f === 0 ? 2 : -2), 4, 8);
                ctx.fillRect(cx + 1, cy + 7 + (f === 1 ? 2 : -2), 4, 8);
                ctx.fillStyle = '#27272a';
                ctx.fillRect(cx - 7, cy - 4, 14, 12);
                ctx.fillStyle = '#06b6d4';
                ctx.fillRect(cx - 6, cy - 14, 12, 4);
                ctx.fillStyle = '#67e8f9';
                ctx.fillRect(cx - 4, cy - 13, 8, 2);
                ctx.fillStyle = '#09090b';
                ctx.fillRect(cx - 6, cy - 18, 12, 5);
                break;
            }

            case 'necromancer': {
                ctx.fillStyle = '#18181b';
                ctx.beginPath();
                ctx.moveTo(cx, cy - 8);
                ctx.lineTo(cx - 10, cy + 15);
                ctx.lineTo(cx + 10, cy + 15);
                ctx.closePath();
                ctx.fill();
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 5, cy - 16, 10, 9);
                ctx.fillStyle = '#10b981';
                ctx.fillRect(cx - 3, cy - 13, 2, 2);
                ctx.fillRect(cx + 1, cy - 13, 2, 2);
                ctx.fillStyle = '#71717a';
                ctx.fillRect(cx + 9, cy - 4, 4, 8);
                ctx.fillStyle = '#10b981';
                ctx.fillRect(cx + 10, cy - 2, 2, 4);
                break;
            }

            case 'valkyrie': {
                ctx.fillStyle = '#cbd5e1';
                ctx.fillRect(cx - 4, cy + 8 + (f === 0 ? 1 : -1), 3, 8);
                ctx.fillRect(cx + 1, cy + 8 + (f === 1 ? 1 : -1), 3, 8);
                ctx.fillStyle = '#f59e0b';
                ctx.fillRect(cx - 6, cy - 4, 12, 12);
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 10, cy - 18, 4, 6);
                ctx.fillRect(cx + 6, cy - 18, 4, 6);
                ctx.fillStyle = '#fed7aa';
                ctx.fillRect(cx - 5, cy - 15, 10, 10);
                ctx.fillStyle = '#e2e8f0';
                ctx.fillRect(cx + 8, cy - 20, 2, 34);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx + 7, cy - 24, 4, 5);
                break;
            }

            case 'goblin': {
                ctx.fillStyle = '#78350f';
                ctx.fillRect(cx - 5, cy + 8 + (f === 0 ? 2 : -2), 4, 6);
                ctx.fillRect(cx + 1, cy + 8 + (f === 1 ? 2 : -2), 4, 6);
                ctx.fillStyle = '#4d7c0f';
                ctx.fillRect(cx - 6, cy - 2, 12, 10);
                ctx.fillRect(cx - 11, cy - 12, 4, 4);
                ctx.fillRect(cx + 7, cy - 12, 4, 4);
                ctx.fillRect(cx - 5, cy - 14, 10, 9);
                ctx.fillStyle = '#ef4444';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 1, cy - 11, 2, 2);
                ctx.fillStyle = '#65a30d';
                ctx.fillRect(cx - 2, cy - 8, 4, 4);
                break;
            }

            case 'phoenix_knight': {
                ctx.fillStyle = '#d97706';
                ctx.fillRect(cx - 5, cy + 8 + (f === 0 ? 1 : -1), 4, 8);
                ctx.fillRect(cx + 1, cy + 8 + (f === 1 ? 1 : -1), 4, 8);
                ctx.fillStyle = '#f59e0b';
                ctx.fillRect(cx - 7, cy - 4, 14, 13);
                ctx.fillStyle = '#dc2626';
                ctx.fillRect(cx - 4, cy - 2, 8, 8);
                ctx.fillStyle = '#fbbf24';
                ctx.fillRect(cx - 6, cy - 16, 12, 11);
                ctx.fillStyle = '#ef4444';
                ctx.fillRect(cx - 2, cy - 24, 4, 9);
                ctx.fillStyle = '#f97316';
                ctx.fillRect(cx + 8, cy - 14, 3, 20);
                break;
            }

            // --- Quadrupeds & Beasts ---
            case 'sheep': {
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 8, cy + 7 + (f === 0 ? 1 : -1), 3, 6);
                ctx.fillRect(cx - 3, cy + 7 + (f === 1 ? 1 : -1), 3, 6);
                ctx.fillRect(cx + 3, cy + 7 + (f === 0 ? 1 : -1), 3, 6);
                ctx.fillRect(cx + 7, cy + 7 + (f === 1 ? 1 : -1), 3, 6);
                ctx.fillStyle = '#f1f5f9';
                ctx.beginPath();
                ctx.arc(cx, cy, 13, 0, Math.PI * 2);
                ctx.arc(cx - 7, cy - 2, 9, 0, Math.PI * 2);
                ctx.arc(cx + 7, cy - 2, 9, 0, Math.PI * 2);
                ctx.arc(cx, cy - 6, 8, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#1e293b';
                ctx.fillRect(cx - 15, cy - 8, 8, 8);
                ctx.fillRect(cx - 17, cy - 11, 4, 4);
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(cx - 13, cy - 6, 2, 2);
                break;
            }

            case 'cow': {
                ctx.fillStyle = '#334155';
                ctx.fillRect(cx - 10, cy + 8 + (f === 0 ? 1 : -1), 4, 8);
                ctx.fillRect(cx - 4, cy + 8 + (f === 1 ? 1 : -1), 4, 8);
                ctx.fillRect(cx + 4, cy + 8 + (f === 0 ? 1 : -1), 4, 8);
                ctx.fillRect(cx + 9, cy + 8 + (f === 1 ? 1 : -1), 4, 8);
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 13, cy - 6, 26, 16);
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 10, cy - 4, 8, 8);
                ctx.fillRect(cx + 3, cy - 2, 7, 9);
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 18, cy - 12, 10, 10);
                ctx.fillStyle = '#f472b6';
                ctx.fillRect(cx - 21, cy - 8, 5, 6);
                ctx.fillStyle = '#e2e8f0';
                ctx.fillRect(cx - 16, cy - 15, 3, 4);
                ctx.fillRect(cx - 11, cy - 15, 3, 4);
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 16, cy - 10, 2, 2);
                break;
            }

            case 'wolf': {
                ctx.fillStyle = '#475569';
                ctx.fillRect(cx - 9, cy + 6 + (f === 0 ? 2 : -2), 3, 8);
                ctx.fillRect(cx - 4, cy + 6 + (f === 1 ? 2 : -2), 3, 8);
                ctx.fillRect(cx + 3, cy + 6 + (f === 0 ? 2 : -2), 3, 8);
                ctx.fillRect(cx + 8, cy + 6 + (f === 1 ? 2 : -2), 3, 8);
                ctx.fillStyle = '#64748b';
                ctx.fillRect(cx - 11, cy - 5, 22, 12);
                ctx.fillStyle = '#cbd5e1';
                ctx.fillRect(cx - 12, cy - 7, 7, 10);
                ctx.fillStyle = '#475569';
                ctx.fillRect(cx - 18, cy - 10, 9, 8);
                ctx.fillRect(cx - 22, cy - 7, 5, 4);
                ctx.fillRect(cx - 16, cy - 14, 3, 4);
                ctx.fillRect(cx - 12, cy - 14, 3, 4);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 16, cy - 8, 2, 2);
                const tailWag = f === 1 ? 3 : -3;
                ctx.fillStyle = '#475569';
                ctx.fillRect(cx + 10, cy - 8 + tailWag, 6, 6);
                ctx.fillRect(cx + 14, cy - 5 + tailWag, 5, 5);
                break;
            }

            case 'frost_wolf': {
                ctx.fillStyle = '#0284c7';
                ctx.fillRect(cx - 9, cy + 6 + (f === 0 ? 2 : -2), 3, 8);
                ctx.fillRect(cx - 4, cy + 6 + (f === 1 ? 2 : -2), 3, 8);
                ctx.fillRect(cx + 3, cy + 6 + (f === 0 ? 2 : -2), 3, 8);
                ctx.fillRect(cx + 8, cy + 6 + (f === 1 ? 2 : -2), 3, 8);
                ctx.fillStyle = '#38bdf8';
                ctx.fillRect(cx - 11, cy - 5, 22, 12);
                ctx.fillStyle = '#a5f3fc';
                ctx.fillRect(cx - 6, cy - 9, 4, 5);
                ctx.fillRect(cx + 1, cy - 9, 4, 5);
                ctx.fillStyle = '#0284c7';
                ctx.fillRect(cx - 18, cy - 10, 9, 8);
                ctx.fillRect(cx - 22, cy - 7, 5, 4);
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(cx - 16, cy - 8, 2, 2);
                ctx.fillStyle = '#a5f3fc';
                ctx.fillRect(cx + 10, cy - 8, 9, 6);
                break;
            }

            case 'bear': {
                ctx.fillStyle = '#451a03';
                ctx.fillRect(cx - 11, cy + 7 + (f === 0 ? 2 : -2), 5, 8);
                ctx.fillRect(cx - 4, cy + 7 + (f === 1 ? 2 : -2), 5, 8);
                ctx.fillRect(cx + 4, cy + 7 + (f === 0 ? 2 : -2), 5, 8);
                ctx.fillRect(cx + 10, cy + 7 + (f === 1 ? 2 : -2), 5, 8);
                ctx.fillStyle = '#78350f';
                ctx.fillRect(cx - 14, cy - 7, 28, 16);
                ctx.fillRect(cx - 10, cy - 10, 16, 5);
                ctx.fillStyle = '#92400e';
                ctx.fillRect(cx - 20, cy - 11, 10, 10);
                ctx.fillStyle = '#b45309';
                ctx.fillRect(cx - 24, cy - 7, 6, 5);
                ctx.fillStyle = '#1e1b4b';
                ctx.fillRect(cx - 24, cy - 7, 2, 2);
                ctx.fillRect(cx - 17, cy - 9, 2, 2);
                ctx.fillStyle = '#78350f';
                ctx.fillRect(cx - 19, cy - 14, 4, 4);
                ctx.fillRect(cx - 13, cy - 14, 4, 4);
                break;
            }

            case 'mammoth': {
                ctx.fillStyle = '#451a03';
                ctx.fillRect(cx - 12, cy + 8 + (f === 0 ? 2 : -2), 6, 10);
                ctx.fillRect(cx - 4, cy + 8 + (f === 1 ? 2 : -2), 6, 10);
                ctx.fillRect(cx + 4, cy + 8 + (f === 0 ? 2 : -2), 6, 10);
                ctx.fillRect(cx + 10, cy + 8 + (f === 1 ? 2 : -2), 6, 10);
                ctx.fillStyle = '#78350f';
                ctx.fillRect(cx - 16, cy - 10, 32, 20);
                ctx.fillRect(cx - 12, cy - 16, 18, 8);
                ctx.fillStyle = '#92400e';
                ctx.fillRect(cx - 22, cy - 8, 8, 18 + (f === 1 ? 2 : -2));
                ctx.fillStyle = '#f8fafc';
                ctx.beginPath();
                ctx.arc(cx - 18, cy + 4, 12, Math.PI * 0.3, Math.PI * 1.1, false);
                ctx.lineWidth = 4;
                ctx.strokeStyle = '#f8fafc';
                ctx.stroke();
                break;
            }

            case 'duck': {
                ctx.fillStyle = '#facc15';
                ctx.beginPath();
                ctx.arc(cx, cy, 10, 0, Math.PI * 2);
                ctx.arc(cx - 8, cy - 8, 7, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#f97316';
                ctx.fillRect(cx - 17, cy - 8, 6, 4);
                ctx.fillRect(cx - 4, cy + 9 + (f === 0 ? 1 : -1), 4, 3);
                ctx.fillRect(cx + 2, cy + 9 + (f === 1 ? 1 : -1), 4, 3);
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 10, cy - 10, 2, 2);
                ctx.fillStyle = '#eab308';
                ctx.fillRect(cx - 2, cy - 4 + (f === 1 ? -4 : 0), 9, 6);
                break;
            }

            case 'frog': {
                ctx.fillStyle = '#16a34a';
                if (f === 0) {
                    ctx.fillRect(cx - 12, cy + 4, 8, 8);
                    ctx.fillRect(cx + 4, cy + 4, 8, 8);
                } else {
                    ctx.fillRect(cx - 14, cy + 8, 6, 10);
                    ctx.fillRect(cx + 8, cy + 8, 6, 10);
                }
                ctx.fillStyle = '#22c55e';
                ctx.beginPath();
                ctx.ellipse(cx, cy, 11, 8, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 6, cy - 2, 12, 6);
                ctx.fillStyle = '#15803d';
                ctx.fillRect(cx - 8, cy - 10, 6, 6);
                ctx.fillRect(cx + 2, cy - 10, 6, 6);
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 6, cy - 9, 3, 3);
                ctx.fillRect(cx + 4, cy - 9, 3, 3);
                break;
            }

            case 'laser_shark': {
                ctx.fillStyle = '#475569';
                ctx.beginPath();
                ctx.ellipse(cx, cy, 20, 9, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(cx - 4, cy - 8);
                ctx.lineTo(cx, cy - 20);
                ctx.lineTo(cx + 6, cy - 8);
                ctx.closePath();
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(cx + 18, cy);
                ctx.lineTo(cx + 26, cy - 12 + (f === 1 ? 4 : -4));
                ctx.lineTo(cx + 26, cy + 12 + (f === 1 ? -4 : 4));
                ctx.closePath();
                ctx.fill();
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 16, cy + 2, 32, 5);
                ctx.fillStyle = '#38bdf8';
                ctx.fillRect(cx - 18, cy - 12, 14, 4);
                ctx.fillStyle = '#ef4444';
                ctx.fillRect(cx - 22, cy - 11, 5, 2);
                break;
            }

            case 'sand_scorpion': {
                ctx.fillStyle = '#b45309';
                ctx.fillRect(cx - 10, cy - 4, 20, 12);
                ctx.strokeStyle = '#92400e';
                ctx.lineWidth = 2;
                for (let l = -6; l <= 6; l += 4) {
                    const lOff = f === 1 ? 3 : -3;
                    ctx.beginPath(); ctx.moveTo(cx - 8, cy + l); ctx.lineTo(cx - 18, cy + l + lOff); ctx.stroke();
                    ctx.beginPath(); ctx.moveTo(cx + 8, cy + l); ctx.lineTo(cx + 18, cy + l - lOff); ctx.stroke();
                }
                ctx.fillStyle = '#d97706';
                ctx.fillRect(cx - 18, cy - 12, 6, 8);
                ctx.fillRect(cx + 12, cy - 12, 6, 8);
                ctx.strokeStyle = '#b45309';
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.moveTo(cx, cy + 6);
                ctx.quadraticCurveTo(cx + 12, cy + 18, cx + 14, cy - 10 + (f === 1 ? 3 : -3));
                ctx.stroke();
                ctx.fillStyle = '#ef4444';
                ctx.fillRect(cx + 12, cy - 14, 5, 4);
                break;
            }

            // --- Vehicles ---
            case 'tank': {
                ctx.fillStyle = '#1e293b';
                ctx.fillRect(cx - 20, cy + 6, 40, 8);
                ctx.fillStyle = '#0f172a';
                for (let w = -18; w <= 16; w += 6) {
                    ctx.fillRect(cx + w, cy + 7, 4, 6);
                }
                ctx.fillStyle = '#3f4f38';
                ctx.fillRect(cx - 16, cy - 4, 32, 11);
                ctx.fillStyle = '#2d3b27';
                ctx.fillRect(cx - 9, cy - 12, 18, 9);
                ctx.fillStyle = '#1a2217';
                ctx.fillRect(cx + 9, cy - 9, 14, 4);
                break;
            }

            case 'warship': {
                ctx.fillStyle = '#334155';
                ctx.beginPath();
                ctx.moveTo(cx + 24, cy);
                ctx.lineTo(cx - 20, cy - 10);
                ctx.lineTo(cx - 20, cy + 10);
                ctx.closePath();
                ctx.fill();
                ctx.fillStyle = '#64748b';
                ctx.fillRect(cx - 10, cy - 6, 16, 12);
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx + 6, cy - 3, 8, 6);
                break;
            }

            case 'pirate_ship': {
                ctx.fillStyle = '#78350f';
                ctx.beginPath();
                ctx.moveTo(cx + 20, cy + 4);
                ctx.lineTo(cx - 20, cy + 4);
                ctx.lineTo(cx - 16, cy + 14);
                ctx.lineTo(cx + 16, cy + 14);
                ctx.closePath();
                ctx.fill();
                ctx.fillStyle = '#451a03';
                ctx.fillRect(cx - 2, cy - 22, 4, 26);
                ctx.fillStyle = '#18181b';
                ctx.fillRect(cx - 14, cy - 18 + (f === 1 ? 2 : 0), 28, 12);
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 3, cy - 14, 6, 4);
                ctx.fillRect(cx - 2, cy - 10, 4, 2);
                break;
            }

            case 'helicopter': {
                ctx.fillStyle = '#15803d';
                ctx.fillRect(cx - 14, cy - 6, 26, 13);
                ctx.fillStyle = '#38bdf8';
                ctx.fillRect(cx + 5, cy - 4, 8, 8);
                ctx.fillStyle = '#374151';
                ctx.fillRect(cx - 12, cy + 9, 22, 2);
                ctx.fillRect(cx - 8, cy + 6, 2, 4);
                ctx.fillRect(cx + 4, cy + 6, 2, 4);
                ctx.fillStyle = '#166534';
                ctx.fillRect(cx - 24, cy - 2, 11, 4);
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 26, cy - 8, 3, 14);
                ctx.fillStyle = '#f8fafc';
                if (f === 0) {
                    ctx.fillRect(cx - 24, cy - 12, 48, 2.5);
                } else {
                    ctx.fillRect(cx - 18, cy - 14, 36, 2.5);
                }
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 2, cy - 11, 4, 5);
                break;
            }

            case 'starfighter': {
                ctx.fillStyle = '#0284c7';
                ctx.beginPath();
                ctx.moveTo(cx + 22, cy);
                ctx.lineTo(cx - 16, cy - 18);
                ctx.lineTo(cx - 8, cy);
                ctx.lineTo(cx - 16, cy + 18);
                ctx.closePath();
                ctx.fill();
                ctx.strokeStyle = '#38bdf8';
                ctx.lineWidth = 1.5;
                ctx.stroke();
                ctx.fillStyle = '#e0f2fe';
                ctx.fillRect(cx, cy - 3, 10, 6);
                const thrustLen = f === 1 ? 12 : 8;
                ctx.fillStyle = '#00e5ff';
                ctx.fillRect(cx - 16 - thrustLen, cy - 3, thrustLen, 6);
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(cx - 16 - thrustLen * 0.6, cy - 1.5, thrustLen * 0.6, 3);
                break;
            }

            case 'mech': {
                const legSwing = f === 1 ? 3 : -3;
                ctx.fillStyle = '#475569';
                ctx.fillRect(cx - 10, cy + 6 + legSwing, 5, 12);
                ctx.fillRect(cx + 5, cy + 6 - legSwing, 5, 12);
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 12, cy + 16 + legSwing, 8, 3);
                ctx.fillRect(cx + 3, cy + 16 - legSwing, 8, 3);
                ctx.fillStyle = '#78716c';
                ctx.fillRect(cx - 12, cy - 10, 24, 18);
                ctx.fillStyle = '#d97706';
                ctx.fillRect(cx - 12, cy - 8, 24, 3);
                ctx.fillRect(cx - 12, cy + 4, 24, 3);
                ctx.fillStyle = '#22c55e';
                ctx.fillRect(cx - 4, cy - 4, 8, 6);
                ctx.fillStyle = '#1e293b';
                ctx.fillRect(cx + 12, cy - 4, 12, 5);
                break;
            }

            case 'colossus_mech': {
                const legSwing = f === 1 ? 4 : -4;
                ctx.fillStyle = '#1e293b';
                ctx.fillRect(cx - 12, cy + 6 + legSwing, 6, 14);
                ctx.fillRect(cx + 6, cy + 6 - legSwing, 6, 14);
                ctx.fillStyle = '#334155';
                ctx.fillRect(cx - 16, cy - 12, 32, 20);
                ctx.fillStyle = '#ef4444';
                ctx.fillRect(cx - 8, cy - 6, 16, 4);
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 20, cy - 16, 7, 10);
                ctx.fillRect(cx + 13, cy - 16, 7, 10);
                break;
            }

            // --- 6 New Legendary Creatures ---
            case 'astral_phoenix': {
                // Cosmic Stellar Firebird
                ctx.fillStyle = '#a855f7';
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(cx - 26, cy - 18 + wingFlap);
                ctx.lineTo(cx + 26, cy - 18 + wingFlap);
                ctx.closePath();
                ctx.fill();
                ctx.fillStyle = '#38bdf8'; // Cyan secondary plumes
                ctx.fillRect(cx - 20, cy - 14 + wingFlap, 10, 4);
                ctx.fillRect(cx + 10, cy - 14 + wingFlap, 10, 4);
                // Celestial Core Body
                ctx.fillStyle = '#f0abfc';
                ctx.fillRect(cx - 5, cy - 9, 10, 18);
                // Glowing White Star Heart
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(cx - 2, cy - 4, 4, 8);
                ctx.fillStyle = '#38bdf8';
                ctx.fillRect(cx - 2, cy - 16, 4, 7); // Starlight Crest
                break;
            }

            case 'frost_giant': {
                // Jötunn Glacial Titan
                ctx.fillStyle = '#0369a1';
                ctx.fillRect(cx - 11, cy + 7 + (f === 0 ? 3 : -3), 6, 12);
                ctx.fillRect(cx + 5, cy + 7 + (f === 1 ? 3 : -3), 6, 12);
                ctx.fillStyle = '#0284c7';
                ctx.fillRect(cx - 14, cy - 10, 28, 20);
                // Glacier Shoulder Spikes
                ctx.fillStyle = '#a5f3fc';
                ctx.fillRect(cx - 18, cy - 14, 6, 8);
                ctx.fillRect(cx + 12, cy - 14, 6, 8);
                // Frost Beard & Head
                ctx.fillStyle = '#38bdf8';
                ctx.fillRect(cx - 8, cy - 20, 16, 12);
                ctx.fillStyle = '#e0f2fe'; // Ice Beard
                ctx.fillRect(cx - 6, cy - 11, 12, 10);
                ctx.fillStyle = '#ffffff'; // Blazing Ice Eyes
                ctx.fillRect(cx - 5, cy - 16, 3, 2);
                ctx.fillRect(cx + 2, cy - 16, 3, 2);
                // Glacier Club
                ctx.fillStyle = '#a5f3fc';
                ctx.fillRect(cx + 14, cy - 22, 6, 30);
                break;
            }

            case 'dread_reaper': {
                // Cloaked Spectral Soul Reaper
                ctx.fillStyle = '#09090b';
                ctx.beginPath();
                ctx.moveTo(cx, cy - 10);
                ctx.lineTo(cx - 12, cy + 16 + (f === 1 ? 2 : 0));
                ctx.lineTo(cx + 12, cy + 16 + (f === 1 ? 2 : 0));
                ctx.closePath();
                ctx.fill();
                // Floating Skull Visage
                ctx.fillStyle = '#f1f5f9';
                ctx.fillRect(cx - 5, cy - 14, 10, 9);
                ctx.fillStyle = '#10b981'; // Green soul eyes
                ctx.fillRect(cx - 3, cy - 12, 2, 2);
                ctx.fillRect(cx + 1, cy - 12, 2, 2);
                // Hood
                ctx.fillStyle = '#18181b';
                ctx.fillRect(cx - 7, cy - 18, 14, 6);
                ctx.fillRect(cx - 7, cy - 14, 3, 8);
                ctx.fillRect(cx + 4, cy - 14, 3, 8);
                // Gleaming Death Scythe
                ctx.fillStyle = '#71717a';
                ctx.fillRect(cx + 8, cy - 22, 3, 38);
                ctx.fillStyle = '#059669'; // Emerald Soul Blade
                ctx.beginPath();
                ctx.moveTo(cx + 9, cy - 22);
                ctx.quadraticCurveTo(cx + 28, cy - 26, cx + 22, cy - 8);
                ctx.lineTo(cx + 18, cy - 8);
                ctx.quadraticCurveTo(cx + 22, cy - 20, cx + 9, cy - 18);
                ctx.fill();
                break;
            }

            case 'dune_scorpion_king': {
                // Desert Emperor Scorpion
                ctx.fillStyle = '#78350f';
                ctx.fillRect(cx - 14, cy - 6, 28, 14);
                ctx.fillStyle = '#f59e0b'; // Golden Carapace Plates
                ctx.fillRect(cx - 10, cy - 4, 20, 10);
                // 8 Spiked Legs
                ctx.strokeStyle = '#92400e';
                ctx.lineWidth = 2.5;
                for (let l = -8; l <= 8; l += 4) {
                    const lOff = f === 1 ? 4 : -4;
                    ctx.beginPath(); ctx.moveTo(cx - 12, cy + l); ctx.lineTo(cx - 24, cy + l + lOff); ctx.stroke();
                    ctx.beginPath(); ctx.moveTo(cx + 12, cy + l); ctx.lineTo(cx + 24, cy + l - lOff); ctx.stroke();
                }
                // Giant Serrated Pincers
                ctx.fillStyle = '#d97706';
                ctx.fillRect(cx - 24, cy - 16, 10, 10);
                ctx.fillRect(cx + 14, cy - 16, 10, 10);
                // Twin Arched Laser Stinger Tails
                ctx.strokeStyle = '#b45309';
                ctx.lineWidth = 3.5;
                ctx.beginPath();
                ctx.moveTo(cx - 4, cy + 6);
                ctx.quadraticCurveTo(cx - 14, cy + 20, cx - 12, cy - 14 + (f === 1 ? 4 : -4));
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(cx + 4, cy + 6);
                ctx.quadraticCurveTo(cx + 14, cy + 20, cx + 12, cy - 14 + (f === 1 ? -4 : 4));
                ctx.stroke();
                // Twin Laser Stinger Nodes
                ctx.fillStyle = '#ef4444';
                ctx.fillRect(cx - 14, cy - 18, 5, 5);
                ctx.fillRect(cx + 9, cy - 18, 5, 5);
                break;
            }

            case 'titan_golem': {
                // Ancient Mechanical Stone Automaton
                ctx.fillStyle = '#334155';
                ctx.fillRect(cx - 12, cy + 6 + (f === 0 ? 3 : -3), 7, 12);
                ctx.fillRect(cx + 5, cy + 6 + (f === 1 ? 3 : -3), 7, 12);
                // Heavy Monolithic Torso
                ctx.fillStyle = '#475569';
                ctx.fillRect(cx - 16, cy - 12, 32, 22);
                ctx.fillStyle = '#b45309'; // Bronze Gears & Bands
                ctx.fillRect(cx - 14, cy - 10, 28, 4);
                ctx.fillRect(cx - 14, cy + 4, 28, 4);
                // Glowing Energy Furnace Core
                ctx.fillStyle = '#22c55e';
                ctx.fillRect(cx - 5, cy - 4, 10, 8);
                ctx.fillStyle = '#86efac';
                ctx.fillRect(cx - 3, cy - 2, 6, 4);
                // Crushing Hammer Fists
                ctx.fillStyle = '#1e293b';
                ctx.fillRect(cx - 24, cy - 2 + (f === 0 ? 3 : -3), 9, 10);
                ctx.fillRect(cx + 15, cy - 2 + (f === 1 ? 3 : -3), 9, 10);
                break;
            }

            case 'pegasus': {
                // Divine Winged Steed
                ctx.fillStyle = '#cbd5e1';
                ctx.fillRect(cx - 10, cy + 7 + (f === 0 ? 2 : -2), 4, 9);
                ctx.fillRect(cx - 4, cy + 7 + (f === 1 ? 2 : -2), 4, 9);
                ctx.fillRect(cx + 4, cy + 7 + (f === 0 ? 2 : -2), 4, 9);
                ctx.fillRect(cx + 9, cy + 7 + (f === 1 ? 2 : -2), 4, 9);
                // Golden Hooves
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 10, cy + 14, 4, 3);
                ctx.fillRect(cx - 4, cy + 14, 4, 3);
                ctx.fillRect(cx + 4, cy + 14, 4, 3);
                ctx.fillRect(cx + 9, cy + 14, 4, 3);
                // White Equine Body
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 13, cy - 6, 26, 15);
                // Feathered Pegasus Wings
                ctx.fillStyle = '#ffffff';
                ctx.beginPath();
                ctx.moveTo(cx, cy - 4);
                ctx.lineTo(cx - 22, cy - 20 + wingFlap);
                ctx.lineTo(cx + 22, cy - 20 + wingFlap);
                ctx.closePath();
                ctx.fill();
                ctx.strokeStyle = '#e2e8f0';
                ctx.lineWidth = 1.5;
                ctx.stroke();
                // Head & Mane
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 18, cy - 14, 10, 10);
                ctx.fillStyle = '#facc15'; // Golden Mane
                ctx.fillRect(cx - 14, cy - 18, 5, 12);
                ctx.fillStyle = '#38bdf8'; // Blue Eye
                ctx.fillRect(cx - 16, cy - 12, 2, 2);
                break;
            }

            case 'solar_phoenix': {
                const legSwing = f === 1 ? 3 : -3;
                const wingFlap = f === 1 ? 4 : -4;
                // Shadow base / legs
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 7, cy + 6 + legSwing, 4, 10);
                ctx.fillRect(cx + 3, cy + 6 - legSwing, 4, 10);
                // Main body
                ctx.fillStyle = '#f59e0b';
                ctx.fillRect(cx - 10, cy - 8, 20, 16);
                // Secondary accent plates / wings
                ctx.fillStyle = '#ef4444';
                ctx.fillRect(cx - 14, cy - 6 + wingFlap, 5, 10);
                ctx.fillRect(cx + 9, cy - 6 + wingFlap, 5, 10);
                // Head / Visor / Glowing Core
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 5, cy - 14, 10, 8);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 1, cy - 11, 2, 2);
                break;
            }

            case 'frost_wyrm': {
                const legSwing = f === 1 ? 3 : -3;
                const wingFlap = f === 1 ? 4 : -4;
                // Shadow base / legs
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 7, cy + 6 + legSwing, 4, 10);
                ctx.fillRect(cx + 3, cy + 6 - legSwing, 4, 10);
                // Main body
                ctx.fillStyle = '#38bdf8';
                ctx.fillRect(cx - 10, cy - 8, 20, 16);
                // Secondary accent plates / wings
                ctx.fillStyle = '#e0f2fe';
                ctx.fillRect(cx - 14, cy - 6 + wingFlap, 5, 10);
                ctx.fillRect(cx + 9, cy - 6 + wingFlap, 5, 10);
                // Head / Visor / Glowing Core
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 5, cy - 14, 10, 8);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 1, cy - 11, 2, 2);
                break;
            }

            case 'iron_behemoth': {
                const legSwing = f === 1 ? 3 : -3;
                const wingFlap = f === 1 ? 4 : -4;
                // Shadow base / legs
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 7, cy + 6 + legSwing, 4, 10);
                ctx.fillRect(cx + 3, cy + 6 - legSwing, 4, 10);
                // Main body
                ctx.fillStyle = '#64748b';
                ctx.fillRect(cx - 10, cy - 8, 20, 16);
                // Secondary accent plates / wings
                ctx.fillStyle = '#334155';
                ctx.fillRect(cx - 14, cy - 6 + wingFlap, 5, 10);
                ctx.fillRect(cx + 9, cy - 6 + wingFlap, 5, 10);
                // Head / Visor / Glowing Core
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 5, cy - 14, 10, 8);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 1, cy - 11, 2, 2);
                break;
            }

            case 'celestial_archon': {
                const legSwing = f === 1 ? 3 : -3;
                const wingFlap = f === 1 ? 4 : -4;
                // Shadow base / legs
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 7, cy + 6 + legSwing, 4, 10);
                ctx.fillRect(cx + 3, cy + 6 - legSwing, 4, 10);
                // Main body
                ctx.fillStyle = '#fef08a';
                ctx.fillRect(cx - 10, cy - 8, 20, 16);
                // Secondary accent plates / wings
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 14, cy - 6 + wingFlap, 5, 10);
                ctx.fillRect(cx + 9, cy - 6 + wingFlap, 5, 10);
                // Head / Visor / Glowing Core
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 5, cy - 14, 10, 8);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 1, cy - 11, 2, 2);
                break;
            }

            case 'shadow_stalker': {
                const legSwing = f === 1 ? 3 : -3;
                const wingFlap = f === 1 ? 4 : -4;
                // Shadow base / legs
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 7, cy + 6 + legSwing, 4, 10);
                ctx.fillRect(cx + 3, cy + 6 - legSwing, 4, 10);
                // Main body
                ctx.fillStyle = '#18181b';
                ctx.fillRect(cx - 10, cy - 8, 20, 16);
                // Secondary accent plates / wings
                ctx.fillStyle = '#7e22ce';
                ctx.fillRect(cx - 14, cy - 6 + wingFlap, 5, 10);
                ctx.fillRect(cx + 9, cy - 6 + wingFlap, 5, 10);
                // Head / Visor / Glowing Core
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 5, cy - 14, 10, 8);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 1, cy - 11, 2, 2);
                break;
            }

            case 'deep_leviathan': {
                const legSwing = f === 1 ? 3 : -3;
                const wingFlap = f === 1 ? 4 : -4;
                // Shadow base / legs
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 7, cy + 6 + legSwing, 4, 10);
                ctx.fillRect(cx + 3, cy + 6 - legSwing, 4, 10);
                // Main body
                ctx.fillStyle = '#0369a1';
                ctx.fillRect(cx - 10, cy - 8, 20, 16);
                // Secondary accent plates / wings
                ctx.fillStyle = '#0284c7';
                ctx.fillRect(cx - 14, cy - 6 + wingFlap, 5, 10);
                ctx.fillRect(cx + 9, cy - 6 + wingFlap, 5, 10);
                // Head / Visor / Glowing Core
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 5, cy - 14, 10, 8);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 1, cy - 11, 2, 2);
                break;
            }

            case 'volcanic_drake': {
                const legSwing = f === 1 ? 3 : -3;
                const wingFlap = f === 1 ? 4 : -4;
                // Shadow base / legs
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 7, cy + 6 + legSwing, 4, 10);
                ctx.fillRect(cx + 3, cy + 6 - legSwing, 4, 10);
                // Main body
                ctx.fillStyle = '#dc2626';
                ctx.fillRect(cx - 10, cy - 8, 20, 16);
                // Secondary accent plates / wings
                ctx.fillStyle = '#ea580c';
                ctx.fillRect(cx - 14, cy - 6 + wingFlap, 5, 10);
                ctx.fillRect(cx + 9, cy - 6 + wingFlap, 5, 10);
                // Head / Visor / Glowing Core
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 5, cy - 14, 10, 8);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 1, cy - 11, 2, 2);
                break;
            }

            case 'storm_valkyrie': {
                const legSwing = f === 1 ? 3 : -3;
                const wingFlap = f === 1 ? 4 : -4;
                // Shadow base / legs
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 7, cy + 6 + legSwing, 4, 10);
                ctx.fillRect(cx + 3, cy + 6 - legSwing, 4, 10);
                // Main body
                ctx.fillStyle = '#67e8f9';
                ctx.fillRect(cx - 10, cy - 8, 20, 16);
                // Secondary accent plates / wings
                ctx.fillStyle = '#38bdf8';
                ctx.fillRect(cx - 14, cy - 6 + wingFlap, 5, 10);
                ctx.fillRect(cx + 9, cy - 6 + wingFlap, 5, 10);
                // Head / Visor / Glowing Core
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 5, cy - 14, 10, 8);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 1, cy - 11, 2, 2);
                break;
            }

            case 'mecha_colossus': {
                const legSwing = f === 1 ? 3 : -3;
                const wingFlap = f === 1 ? 4 : -4;
                // Shadow base / legs
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 7, cy + 6 + legSwing, 4, 10);
                ctx.fillRect(cx + 3, cy + 6 - legSwing, 4, 10);
                // Main body
                ctx.fillStyle = '#334155';
                ctx.fillRect(cx - 10, cy - 8, 20, 16);
                // Secondary accent plates / wings
                ctx.fillStyle = '#ef4444';
                ctx.fillRect(cx - 14, cy - 6 + wingFlap, 5, 10);
                ctx.fillRect(cx + 9, cy - 6 + wingFlap, 5, 10);
                // Head / Visor / Glowing Core
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 5, cy - 14, 10, 8);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 1, cy - 11, 2, 2);
                break;
            }

            case 'astral_unicorn': {
                const legSwing = f === 1 ? 3 : -3;
                const wingFlap = f === 1 ? 4 : -4;
                // Shadow base / legs
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 7, cy + 6 + legSwing, 4, 10);
                ctx.fillRect(cx + 3, cy + 6 - legSwing, 4, 10);
                // Main body
                ctx.fillStyle = '#f472b6';
                ctx.fillRect(cx - 10, cy - 8, 20, 16);
                // Secondary accent plates / wings
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(cx - 14, cy - 6 + wingFlap, 5, 10);
                ctx.fillRect(cx + 9, cy - 6 + wingFlap, 5, 10);
                // Head / Visor / Glowing Core
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 5, cy - 14, 10, 8);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 1, cy - 11, 2, 2);
                break;
            }

            case 'chronomancer': {
                const legSwing = f === 1 ? 3 : -3;
                const wingFlap = f === 1 ? 4 : -4;
                // Shadow base / legs
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 7, cy + 6 + legSwing, 4, 10);
                ctx.fillRect(cx + 3, cy + 6 - legSwing, 4, 10);
                // Main body
                ctx.fillStyle = '#818cf8';
                ctx.fillRect(cx - 10, cy - 8, 20, 16);
                // Secondary accent plates / wings
                ctx.fillStyle = '#c084fc';
                ctx.fillRect(cx - 14, cy - 6 + wingFlap, 5, 10);
                ctx.fillRect(cx + 9, cy - 6 + wingFlap, 5, 10);
                // Head / Visor / Glowing Core
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 5, cy - 14, 10, 8);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 1, cy - 11, 2, 2);
                break;
            }

            case 'spectral_knight': {
                const legSwing = f === 1 ? 3 : -3;
                const wingFlap = f === 1 ? 4 : -4;
                // Shadow base / legs
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 7, cy + 6 + legSwing, 4, 10);
                ctx.fillRect(cx + 3, cy + 6 - legSwing, 4, 10);
                // Main body
                ctx.fillStyle = '#94a3b8';
                ctx.fillRect(cx - 10, cy - 8, 20, 16);
                // Secondary accent plates / wings
                ctx.fillStyle = '#64748b';
                ctx.fillRect(cx - 14, cy - 6 + wingFlap, 5, 10);
                ctx.fillRect(cx + 9, cy - 6 + wingFlap, 5, 10);
                // Head / Visor / Glowing Core
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 5, cy - 14, 10, 8);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 1, cy - 11, 2, 2);
                break;
            }

            case 'sand_reaper': {
                const legSwing = f === 1 ? 3 : -3;
                const wingFlap = f === 1 ? 4 : -4;
                // Shadow base / legs
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 7, cy + 6 + legSwing, 4, 10);
                ctx.fillRect(cx + 3, cy + 6 - legSwing, 4, 10);
                // Main body
                ctx.fillStyle = '#d97706';
                ctx.fillRect(cx - 10, cy - 8, 20, 16);
                // Secondary accent plates / wings
                ctx.fillStyle = '#b45309';
                ctx.fillRect(cx - 14, cy - 6 + wingFlap, 5, 10);
                ctx.fillRect(cx + 9, cy - 6 + wingFlap, 5, 10);
                // Head / Visor / Glowing Core
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 5, cy - 14, 10, 8);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 1, cy - 11, 2, 2);
                break;
            }

            case 'forest_ancient': {
                const legSwing = f === 1 ? 3 : -3;
                const wingFlap = f === 1 ? 4 : -4;
                // Shadow base / legs
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 7, cy + 6 + legSwing, 4, 10);
                ctx.fillRect(cx + 3, cy + 6 - legSwing, 4, 10);
                // Main body
                ctx.fillStyle = '#166534';
                ctx.fillRect(cx - 10, cy - 8, 20, 16);
                // Secondary accent plates / wings
                ctx.fillStyle = '#15803d';
                ctx.fillRect(cx - 14, cy - 6 + wingFlap, 5, 10);
                ctx.fillRect(cx + 9, cy - 6 + wingFlap, 5, 10);
                // Head / Visor / Glowing Core
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 5, cy - 14, 10, 8);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 1, cy - 11, 2, 2);
                break;
            }

            case 'plague_bringer': {
                const legSwing = f === 1 ? 3 : -3;
                const wingFlap = f === 1 ? 4 : -4;
                // Shadow base / legs
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 7, cy + 6 + legSwing, 4, 10);
                ctx.fillRect(cx + 3, cy + 6 - legSwing, 4, 10);
                // Main body
                ctx.fillStyle = '#84cc16';
                ctx.fillRect(cx - 10, cy - 8, 20, 16);
                // Secondary accent plates / wings
                ctx.fillStyle = '#4d7c0f';
                ctx.fillRect(cx - 14, cy - 6 + wingFlap, 5, 10);
                ctx.fillRect(cx + 9, cy - 6 + wingFlap, 5, 10);
                // Head / Visor / Glowing Core
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 5, cy - 14, 10, 8);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 1, cy - 11, 2, 2);
                break;
            }

            case 'crystal_scorpion': {
                const legSwing = f === 1 ? 3 : -3;
                const wingFlap = f === 1 ? 4 : -4;
                // Shadow base / legs
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 7, cy + 6 + legSwing, 4, 10);
                ctx.fillRect(cx + 3, cy + 6 - legSwing, 4, 10);
                // Main body
                ctx.fillStyle = '#ec4899';
                ctx.fillRect(cx - 10, cy - 8, 20, 16);
                // Secondary accent plates / wings
                ctx.fillStyle = '#f472b6';
                ctx.fillRect(cx - 14, cy - 6 + wingFlap, 5, 10);
                ctx.fillRect(cx + 9, cy - 6 + wingFlap, 5, 10);
                // Head / Visor / Glowing Core
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 5, cy - 14, 10, 8);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 1, cy - 11, 2, 2);
                break;
            }

            case 'thunder_hawk': {
                const legSwing = f === 1 ? 3 : -3;
                const wingFlap = f === 1 ? 4 : -4;
                // Shadow base / legs
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 7, cy + 6 + legSwing, 4, 10);
                ctx.fillRect(cx + 3, cy + 6 - legSwing, 4, 10);
                // Main body
                ctx.fillStyle = '#0284c7';
                ctx.fillRect(cx - 10, cy - 8, 20, 16);
                // Secondary accent plates / wings
                ctx.fillStyle = '#38bdf8';
                ctx.fillRect(cx - 14, cy - 6 + wingFlap, 5, 10);
                ctx.fillRect(cx + 9, cy - 6 + wingFlap, 5, 10);
                // Head / Visor / Glowing Core
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 5, cy - 14, 10, 8);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 1, cy - 11, 2, 2);
                break;
            }

            case 'magma_elemental': {
                const legSwing = f === 1 ? 3 : -3;
                const wingFlap = f === 1 ? 4 : -4;
                // Shadow base / legs
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 7, cy + 6 + legSwing, 4, 10);
                ctx.fillRect(cx + 3, cy + 6 - legSwing, 4, 10);
                // Main body
                ctx.fillStyle = '#ea580c';
                ctx.fillRect(cx - 10, cy - 8, 20, 16);
                // Secondary accent plates / wings
                ctx.fillStyle = '#f97316';
                ctx.fillRect(cx - 14, cy - 6 + wingFlap, 5, 10);
                ctx.fillRect(cx + 9, cy - 6 + wingFlap, 5, 10);
                // Head / Visor / Glowing Core
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 5, cy - 14, 10, 8);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 1, cy - 11, 2, 2);
                break;
            }

            case 'frost_banshee': {
                const legSwing = f === 1 ? 3 : -3;
                const wingFlap = f === 1 ? 4 : -4;
                // Shadow base / legs
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 7, cy + 6 + legSwing, 4, 10);
                ctx.fillRect(cx + 3, cy + 6 - legSwing, 4, 10);
                // Main body
                ctx.fillStyle = '#a5f3fc';
                ctx.fillRect(cx - 10, cy - 8, 20, 16);
                // Secondary accent plates / wings
                ctx.fillStyle = '#38bdf8';
                ctx.fillRect(cx - 14, cy - 6 + wingFlap, 5, 10);
                ctx.fillRect(cx + 9, cy - 6 + wingFlap, 5, 10);
                // Head / Visor / Glowing Core
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 5, cy - 14, 10, 8);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 1, cy - 11, 2, 2);
                break;
            }

            case 'dune_crawler': {
                const legSwing = f === 1 ? 3 : -3;
                const wingFlap = f === 1 ? 4 : -4;
                // Shadow base / legs
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 7, cy + 6 + legSwing, 4, 10);
                ctx.fillRect(cx + 3, cy + 6 - legSwing, 4, 10);
                // Main body
                ctx.fillStyle = '#b45309';
                ctx.fillRect(cx - 10, cy - 8, 20, 16);
                // Secondary accent plates / wings
                ctx.fillStyle = '#d97706';
                ctx.fillRect(cx - 14, cy - 6 + wingFlap, 5, 10);
                ctx.fillRect(cx + 9, cy - 6 + wingFlap, 5, 10);
                // Head / Visor / Glowing Core
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 5, cy - 14, 10, 8);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 1, cy - 11, 2, 2);
                break;
            }

            case 'void_horror': {
                const legSwing = f === 1 ? 3 : -3;
                const wingFlap = f === 1 ? 4 : -4;
                // Shadow base / legs
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 7, cy + 6 + legSwing, 4, 10);
                ctx.fillRect(cx + 3, cy + 6 - legSwing, 4, 10);
                // Main body
                ctx.fillStyle = '#4c1d95';
                ctx.fillRect(cx - 10, cy - 8, 20, 16);
                // Secondary accent plates / wings
                ctx.fillStyle = '#7c3aed';
                ctx.fillRect(cx - 14, cy - 6 + wingFlap, 5, 10);
                ctx.fillRect(cx + 9, cy - 6 + wingFlap, 5, 10);
                // Head / Visor / Glowing Core
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 5, cy - 14, 10, 8);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 1, cy - 11, 2, 2);
                break;
            }

            case 'sun_warrior': {
                const legSwing = f === 1 ? 3 : -3;
                const wingFlap = f === 1 ? 4 : -4;
                // Shadow base / legs
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 7, cy + 6 + legSwing, 4, 10);
                ctx.fillRect(cx + 3, cy + 6 - legSwing, 4, 10);
                // Main body
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 10, cy - 8, 20, 16);
                // Secondary accent plates / wings
                ctx.fillStyle = '#eab308';
                ctx.fillRect(cx - 14, cy - 6 + wingFlap, 5, 10);
                ctx.fillRect(cx + 9, cy - 6 + wingFlap, 5, 10);
                // Head / Visor / Glowing Core
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 5, cy - 14, 10, 8);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 1, cy - 11, 2, 2);
                break;
            }

            case 'abyssal_kraken_spawn': {
                const legSwing = f === 1 ? 3 : -3;
                const wingFlap = f === 1 ? 4 : -4;
                // Shadow base / legs
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 7, cy + 6 + legSwing, 4, 10);
                ctx.fillRect(cx + 3, cy + 6 - legSwing, 4, 10);
                // Main body
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 10, cy - 8, 20, 16);
                // Secondary accent plates / wings
                ctx.fillStyle = '#1e293b';
                ctx.fillRect(cx - 14, cy - 6 + wingFlap, 5, 10);
                ctx.fillRect(cx + 9, cy - 6 + wingFlap, 5, 10);
                // Head / Visor / Glowing Core
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 5, cy - 14, 10, 8);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 1, cy - 11, 2, 2);
                break;
            }

            case 'runic_golem': {
                const legSwing = f === 1 ? 3 : -3;
                const wingFlap = f === 1 ? 4 : -4;
                // Shadow base / legs
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 7, cy + 6 + legSwing, 4, 10);
                ctx.fillRect(cx + 3, cy + 6 - legSwing, 4, 10);
                // Main body
                ctx.fillStyle = '#475569';
                ctx.fillRect(cx - 10, cy - 8, 20, 16);
                // Secondary accent plates / wings
                ctx.fillStyle = '#38bdf8';
                ctx.fillRect(cx - 14, cy - 6 + wingFlap, 5, 10);
                ctx.fillRect(cx + 9, cy - 6 + wingFlap, 5, 10);
                // Head / Visor / Glowing Core
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 5, cy - 14, 10, 8);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 1, cy - 11, 2, 2);
                break;
            }

            case 'cyber_hound': {
                const legSwing = f === 1 ? 3 : -3;
                const wingFlap = f === 1 ? 4 : -4;
                // Shadow base / legs
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 7, cy + 6 + legSwing, 4, 10);
                ctx.fillRect(cx + 3, cy + 6 - legSwing, 4, 10);
                // Main body
                ctx.fillStyle = '#06b6d4';
                ctx.fillRect(cx - 10, cy - 8, 20, 16);
                // Secondary accent plates / wings
                ctx.fillStyle = '#22d3ee';
                ctx.fillRect(cx - 14, cy - 6 + wingFlap, 5, 10);
                ctx.fillRect(cx + 9, cy - 6 + wingFlap, 5, 10);
                // Head / Visor / Glowing Core
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 5, cy - 14, 10, 8);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 1, cy - 11, 2, 2);
                break;
            }

            case 'blood_fiend': {
                const legSwing = f === 1 ? 3 : -3;
                const wingFlap = f === 1 ? 4 : -4;
                // Shadow base / legs
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 7, cy + 6 + legSwing, 4, 10);
                ctx.fillRect(cx + 3, cy + 6 - legSwing, 4, 10);
                // Main body
                ctx.fillStyle = '#991b1b';
                ctx.fillRect(cx - 10, cy - 8, 20, 16);
                // Secondary accent plates / wings
                ctx.fillStyle = '#dc2626';
                ctx.fillRect(cx - 14, cy - 6 + wingFlap, 5, 10);
                ctx.fillRect(cx + 9, cy - 6 + wingFlap, 5, 10);
                // Head / Visor / Glowing Core
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 5, cy - 14, 10, 8);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 1, cy - 11, 2, 2);
                break;
            }

            case 'titan_dreadnought': {
                const legSwing = f === 1 ? 3 : -3;
                const wingFlap = f === 1 ? 4 : -4;
                // Shadow base / legs
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 7, cy + 6 + legSwing, 4, 10);
                ctx.fillRect(cx + 3, cy + 6 - legSwing, 4, 10);
                // Main body
                ctx.fillStyle = '#1e293b';
                ctx.fillRect(cx - 10, cy - 8, 20, 16);
                // Secondary accent plates / wings
                ctx.fillStyle = '#ef4444';
                ctx.fillRect(cx - 14, cy - 6 + wingFlap, 5, 10);
                ctx.fillRect(cx + 9, cy - 6 + wingFlap, 5, 10);
                // Head / Visor / Glowing Core
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 5, cy - 14, 10, 8);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 1, cy - 11, 2, 2);
                break;
            }

            case 'steampunk_airship': {
                const legSwing = f === 1 ? 3 : -3;
                const wingFlap = f === 1 ? 4 : -4;
                // Shadow base / legs
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 7, cy + 6 + legSwing, 4, 10);
                ctx.fillRect(cx + 3, cy + 6 - legSwing, 4, 10);
                // Main body
                ctx.fillStyle = '#78350f';
                ctx.fillRect(cx - 10, cy - 8, 20, 16);
                // Secondary accent plates / wings
                ctx.fillStyle = '#d97706';
                ctx.fillRect(cx - 14, cy - 6 + wingFlap, 5, 10);
                ctx.fillRect(cx + 9, cy - 6 + wingFlap, 5, 10);
                // Head / Visor / Glowing Core
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 5, cy - 14, 10, 8);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 1, cy - 11, 2, 2);
                break;
            }

            case 'quantum_mech': {
                const legSwing = f === 1 ? 3 : -3;
                const wingFlap = f === 1 ? 4 : -4;
                // Shadow base / legs
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 7, cy + 6 + legSwing, 4, 10);
                ctx.fillRect(cx + 3, cy + 6 - legSwing, 4, 10);
                // Main body
                ctx.fillStyle = '#00e5ff';
                ctx.fillRect(cx - 10, cy - 8, 20, 16);
                // Secondary accent plates / wings
                ctx.fillStyle = '#a855f7';
                ctx.fillRect(cx - 14, cy - 6 + wingFlap, 5, 10);
                ctx.fillRect(cx + 9, cy - 6 + wingFlap, 5, 10);
                // Head / Visor / Glowing Core
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 5, cy - 14, 10, 8);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 1, cy - 11, 2, 2);
                break;
            }

            case 'cosmic_dragon': {
                const legSwing = f === 1 ? 3 : -3;
                const wingFlap = f === 1 ? 4 : -4;
                // Shadow base / legs
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 7, cy + 6 + legSwing, 4, 10);
                ctx.fillRect(cx + 3, cy + 6 - legSwing, 4, 10);
                // Main body
                ctx.fillStyle = '#a21caf';
                ctx.fillRect(cx - 10, cy - 8, 20, 16);
                // Secondary accent plates / wings
                ctx.fillStyle = '#38bdf8';
                ctx.fillRect(cx - 14, cy - 6 + wingFlap, 5, 10);
                ctx.fillRect(cx + 9, cy - 6 + wingFlap, 5, 10);
                // Head / Visor / Glowing Core
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 5, cy - 14, 10, 8);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 3, cy - 11, 2, 2);
                ctx.fillRect(cx + 1, cy - 11, 2, 2);
                break;
            }

            // --- Default Fallback ---
            default: {
                const hash = type.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
                const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899'];
                const col = colors[hash % colors.length];

                ctx.fillStyle = '#1e293b';
                ctx.fillRect(cx - 6, cy + 7 + (f === 0 ? 2 : -2), 4, 8);
                ctx.fillRect(cx + 2, cy + 7 + (f === 1 ? 2 : -2), 4, 8);
                ctx.fillStyle = col;
                ctx.fillRect(cx - 10, cy - 8, 20, 16);
                ctx.fillStyle = '#f8fafc';
                ctx.fillRect(cx - 6, cy - 5, 4, 4);
                ctx.fillRect(cx + 2, cy - 5, 4, 4);
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(cx - 4, cy - 4, 2, 2);
                ctx.fillRect(cx + 4, cy - 4, 2, 2);
                ctx.fillStyle = '#facc15';
                ctx.fillRect(cx - 4, cy - 14, 8, 5);
                break;
            }
        }
    }
    
    hexToRgba(hex, alpha = 1.0) {
        const key = hex + '_' + alpha;
        if (this.colorCache.has(key)) return this.colorCache.get(key);

        let r = 0, g = 0, b = 0;
        if (hex.startsWith('#')) {
            if (hex.length === 4) {
                r = parseInt(hex[1] + hex[1], 16) / 255;
                g = parseInt(hex[2] + hex[2], 16) / 255;
                b = parseInt(hex[3] + hex[3], 16) / 255;
            } else if (hex.length >= 7) {
                r = parseInt(hex.slice(1, 3), 16) / 255;
                g = parseInt(hex.slice(3, 5), 16) / 255;
                b = parseInt(hex.slice(5, 7), 16) / 255;
            }
        }
        const res = [r, g, b, alpha];
        this.colorCache.set(key, res);
        return res;
    }

    // --- Camera Controls ---
    updateCamera(world = null) {
        const cam = this.camera;
        const aspect = this.canvas.width / this.canvas.height;

        // First-Person Control Camera: eye sits at creature head looking forward
        if (this.isFirstPerson && this.possessedEntity && this.possessedEntity.active) {
            const ent = this.possessedEntity;
            const groundZ = (world && typeof world.getElevation === 'function') ? world.getElevation(ent.x, ent.y) : 2.0;
            const eyeHeight = (ent.size || 2.0) * 0.7 + 0.8;
            cam.eye[0] = ent.x;
            cam.eye[1] = ent.y;
            cam.eye[2] = groundZ + eyeHeight;

            const cosP = Math.cos(cam.pitch);
            const sinP = Math.sin(cam.pitch);
            const cosY = Math.cos(cam.yaw);
            const sinY = Math.sin(cam.yaw);

            cam.forward[0] = cosP * sinY;
            cam.forward[1] = -cosP * cosY;
            cam.forward[2] = sinP;
            Vec3.normalize(cam.forward, cam.forward);

            cam.target[0] = cam.eye[0] + cam.forward[0] * 10.0;
            cam.target[1] = cam.eye[1] + cam.forward[1] * 10.0;
            cam.target[2] = cam.eye[2] + cam.forward[2] * 10.0;

            cam.right[0] = cosY;
            cam.right[1] = sinY;
            cam.right[2] = 0.0;
            Vec3.normalize(cam.right, cam.right);

            // World up is [0, 0, 1]. Orthogonal up vector: forward x right
            cam.up[0] = cam.forward[1] * cam.right[2] - cam.forward[2] * cam.right[1];
            cam.up[1] = cam.forward[2] * cam.right[0] - cam.forward[0] * cam.right[2];
            cam.up[2] = cam.forward[0] * cam.right[1] - cam.forward[1] * cam.right[0];
            Vec3.normalize(cam.up, cam.up);

            Mat4.perspective(cam.projMat, 75 * Math.PI / 180, aspect, 0.15, 1400.0);
            Mat4.lookAt(cam.viewMat, cam.eye, cam.target, [0, 0, 1]);
            Mat4.multiply(cam.viewProj, cam.projMat, cam.viewMat);
            Mat4.invert(cam.invViewProj, cam.viewProj);
            return;
        }

        // Spherical coordinates around target
        // yaw: azimuth angle around Z axis
        // pitch: angle from horizontal plane
        const cosP = Math.cos(cam.pitch);
        const sinP = Math.sin(cam.pitch);
        const cosY = Math.cos(cam.yaw);
        const sinY = Math.sin(cam.yaw);

        cam.eye[0] = cam.target[0] + cam.distance * cosP * sinY;
        cam.eye[1] = cam.target[1] - cam.distance * cosP * cosY;
        cam.eye[2] = cam.target[2] + cam.distance * sinP;

        // Forward vector (eye to target)
        cam.forward[0] = cam.target[0] - cam.eye[0];
        cam.forward[1] = cam.target[1] - cam.eye[1];
        cam.forward[2] = cam.target[2] - cam.eye[2];
        Vec3.normalize(cam.forward, cam.forward);

        // Right vector (forward x world up [0, 0, 1])
        cam.right[0] = cam.forward[1] * 1.0;
        cam.right[1] = -cam.forward[0] * 1.0;
        cam.right[2] = 0.0;
        Vec3.normalize(cam.right, cam.right);

        // Up vector (right x forward)
        cam.up[0] = cam.right[1] * cam.forward[2] - cam.right[2] * cam.forward[1];
        cam.up[1] = cam.right[2] * cam.forward[0] - cam.right[0] * cam.forward[2];
        cam.up[2] = cam.right[0] * cam.forward[1] - cam.right[1] * cam.forward[0];
        Vec3.normalize(cam.up, cam.up);

        // Matrices
        Mat4.perspective(cam.projMat, cam.fov, aspect, 0.5, 1200.0);
        Mat4.lookAt(cam.viewMat, cam.eye, cam.target, [0, 0, 1]);
        Mat4.multiply(cam.viewProj, cam.projMat, cam.viewMat);
        Mat4.invert(cam.invViewProj, cam.viewProj);
    }

    panCamera(deltaX, deltaY) {
        const cam = this.camera;
        const factor = (cam.distance / 600.0) * 0.85;

        // Pan along camera right and ground forward
        const right = cam.right;
        const fwdX = -Math.sin(cam.yaw);
        const fwdY = Math.cos(cam.yaw);

        cam.target[0] += (-right[0] * deltaX - fwdX * deltaY) * factor;
        cam.target[1] += (-right[1] * deltaX - fwdY * deltaY) * factor;
    }

    pan(deltaX, deltaY) {
        this.panCamera(deltaX, deltaY);
    }

    rotateCamera(deltaYaw, deltaPitch) {
        const cam = this.camera;
        cam.yaw += deltaYaw * 0.0075;
        cam.pitch += deltaPitch * 0.0075;

        if (this.isFirstPerson) {
            cam.pitch = Math.max(-1.35, Math.min(1.35, cam.pitch));
        } else {
            // Constrain pitch to avoid flipping over pole
            const minPitch = 0.12; // ~7 deg
            const maxPitch = 1.48; // ~85 deg
            cam.pitch = Math.max(minPitch, Math.min(maxPitch, cam.pitch));
        }
    }

    orbit(deltaYaw, deltaPitch) {
        this.rotateCamera(deltaYaw, deltaPitch);
    }

    zoomCamera(deltaZoom) {
        const cam = this.camera;
        cam.distance += deltaZoom * (cam.distance * 0.0012);
        cam.distance = Math.max(cam.minDistance, Math.min(cam.maxDistance, cam.distance));
    }

    zoom(deltaZoom) {
        this.zoomCamera(deltaZoom);
    }

    resize() {
        if (!this.canvas || !this.gl) return;
        if (this.canvas.width !== window.innerWidth || this.canvas.height !== window.innerHeight) {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        }
    }

    screenToWorld(screenX, screenY, world) {
        return this.screenToWorldRay(screenX, screenY, world);
    }

    setTarget(x, y, z = 2.5) {
        this.camera.target[0] = x;
        this.camera.target[1] = y;
        this.camera.target[2] = z;
    }

    // --- Raycasting for 3D Cursor Placement ---
    screenToWorldRay(screenX, screenY, world) {
        if (!this.gl || !this.camera.invViewProj) return null;

        // Normalized Device Coordinates
        const ndcX = (screenX / this.canvas.width) * 2.0 - 1.0;
        const ndcY = 1.0 - (screenY / this.canvas.height) * 2.0;

        const nearPt = Vec3.create(ndcX, ndcY, -1.0);
        const farPt  = Vec3.create(ndcX, ndcY,  1.0);

        Vec3.transformMat4(nearPt, nearPt, this.camera.invViewProj);
        Vec3.transformMat4(farPt, farPt, this.camera.invViewProj);

        const rayDir = [
            farPt[0] - nearPt[0],
            farPt[1] - nearPt[1],
            farPt[2] - nearPt[2]
        ];
        Vec3.normalize(rayDir, rayDir);

        // Raymarching against terrain heightfield
        let t = 0.0;
        const maxDist = 500.0;
        const stepSize = 1.0;
        let bestX = nearPt[0];
        let bestY = nearPt[1];
        let bestZ = nearPt[2];

        if (rayDir[2] < -0.001) {
            const approxGroundZ = 3.0;
            const tPlane = (approxGroundZ - nearPt[2]) / rayDir[2];
            if (tPlane > 0) t = Math.max(0, tPlane - 30.0);
        }

        while (t < maxDist) {
            const rx = nearPt[0] + rayDir[0] * t;
            const ry = nearPt[1] + rayDir[1] * t;
            const rz = nearPt[2] + rayDir[2] * t;

            if (world && world.inBounds(Math.floor(rx), Math.floor(ry))) {
                const elev = world.getElevation(rx, ry);
                if (rz <= elev) {
                    let t0 = t - stepSize;
                    let t1 = t;
                    for (let step = 0; step < 5; step++) {
                        const mid = (t0 + t1) * 0.5;
                        const mx = nearPt[0] + rayDir[0] * mid;
                        const my = nearPt[1] + rayDir[1] * mid;
                        const mz = nearPt[2] + rayDir[2] * mid;
                        if (mz <= world.getElevation(mx, my)) t1 = mid;
                        else t0 = mid;
                    }
                    bestX = nearPt[0] + rayDir[0] * t1;
                    bestY = nearPt[1] + rayDir[1] * t1;
                    bestZ = nearPt[2] + rayDir[2] * t1;
                    return { x: bestX, y: bestY, z: bestZ };
                }
            }
            t += stepSize;
        }

        if (Math.abs(rayDir[2]) > 0.001) {
            const t0 = -nearPt[2] / rayDir[2];
            if (t0 > 0) {
                return {
                    x: nearPt[0] + rayDir[0] * t0,
                    y: nearPt[1] + rayDir[1] * t0,
                    z: 0
                };
            }
        }

        return { x: this.camera.target[0], y: this.camera.target[1], z: 0 };
    }

    worldToScreen(wx, wy, wz = 0) {
        const clip = Vec3.create(wx, wy, wz);
        Vec3.transformMat4(clip, clip, this.camera.viewProj);
        const screenX = (clip[0] * 0.5 + 0.5) * this.canvas.width;
        const screenY = (1.0 - (clip[1] * 0.5 + 0.5)) * this.canvas.height;
        return { x: screenX, y: screenY };
    }

    // --- Terrain Mesh Generation & Upload ---
    updateTerrainMesh(world) {
        if (!world || !this.gl) return;
        const gl = this.gl;
        const w = world.width;
        const h = world.height;

        const vertStride = 11;
        const totalVerts = w * h;
        if (!this.vertData || this.vertData.length !== totalVerts * vertStride) {
            this.vertData = new Float32Array(totalVerts * vertStride);
        }
        const vertData = this.vertData;

        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                const i = y * w + x;
                const vOffset = i * vertStride;
                const t = world.tiles[i];
                const elev = world.elevation ? world.elevation[i] : (TILE_BASE_ELEVATION[t] || 2.0);

                // Position (x, y, z)
                vertData[vOffset] = x;
                vertData[vOffset + 1] = y;
                vertData[vOffset + 2] = elev;

                // Surface Normal
                const elevL = (x > 0) ? (world.elevation ? world.elevation[i - 1] : elev) : elev;
                const elevR = (x < w - 1) ? (world.elevation ? world.elevation[i + 1] : elev) : elev;
                const elevD = (y > 0) ? (world.elevation ? world.elevation[i - w] : elev) : elev;
                const elevU = (y < h - 1) ? (world.elevation ? world.elevation[i + w] : elev) : elev;

                const nx = (elevL - elevR) * 0.5;
                const ny = (elevD - elevU) * 0.5;
                const nz = 1.0;
                const nLen = Math.hypot(nx, ny, nz) || 1.0;
                vertData[vOffset + 3] = nx / nLen;
                vertData[vOffset + 4] = ny / nLen;
                vertData[vOffset + 5] = nz / nLen;

                // Color from TILE_INFO
                const info = TILE_INFO[t] || { color: '#489e38' };
                const rgba = this.hexToRgba(info.color);
                const varOffset = ((world.variation ? world.variation[i] : 0) - 2) * 0.03;
                vertData[vOffset + 6] = Math.max(0, Math.min(1, rgba[0] + varOffset));
                vertData[vOffset + 7] = Math.max(0, Math.min(1, rgba[1] + varOffset));
                vertData[vOffset + 8] = Math.max(0, Math.min(1, rgba[2] + varOffset));
                vertData[vOffset + 9] = rgba[3];

                // Tile Type
                vertData[vOffset + 10] = t;
            }
        }

        gl.bindVertexArray(this.terrainVAO);

        // Upload Vertices
        gl.bindBuffer(gl.ARRAY_BUFFER, this.terrainVBO);
        gl.bufferData(gl.ARRAY_BUFFER, vertData, gl.DYNAMIC_DRAW);

        const strideBytes = vertStride * 4;
        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, strideBytes, 0);

        gl.enableVertexAttribArray(1);
        gl.vertexAttribPointer(1, 3, gl.FLOAT, false, strideBytes, 3 * 4);

        gl.enableVertexAttribArray(2);
        gl.vertexAttribPointer(2, 4, gl.FLOAT, false, strideBytes, 6 * 4);

        gl.enableVertexAttribArray(3);
        gl.vertexAttribPointer(3, 1, gl.FLOAT, false, strideBytes, 10 * 4);

        if (this.lastWorldW !== w || this.lastWorldH !== h) {
            const quadsX = w - 1;
            const quadsY = h - 1;
            const indices = new Uint32Array(quadsX * quadsY * 6);
            let idx = 0;
            for (let y = 0; y < quadsY; y++) {
                for (let x = 0; x < quadsX; x++) {
                    const row1 = y * w + x;
                    const row2 = (y + 1) * w + x;

                    indices[idx++] = row1;
                    indices[idx++] = row2;
                    indices[idx++] = row1 + 1;

                    indices[idx++] = row1 + 1;
                    indices[idx++] = row2;
                    indices[idx++] = row2 + 1;
                }
            }
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.terrainIBO);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
            this.terrainIndexCount = indices.length;
            this.lastWorldW = w;
            this.lastWorldH = h;
        }

        gl.bindVertexArray(null);
    }

    // --- Main 3D Render Loop ---
    render(world, entityManager, disasterManager, particleSystem, activeTool, brushSize, mouseWorldPos, timeOfDay = 12.0) {
        if (!this.gl) return;
        const gl = this.gl;
        this.animTime += 0.016;

        if (this.canvas.width !== window.innerWidth || this.canvas.height !== window.innerHeight) {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        }

        this.updateCamera(world);

        const t = ((timeOfDay % 24) + 24) % 24;

        // Dynamic 3D Day/Night Celestial Sun & Moon Lighting
        let skyR = 0.04, skyG = 0.04, skyB = 0.08;
        if (t >= 7.5 && t <= 17.0) {
            // High Daylight
            skyR = 0.08; skyG = 0.12; skyB = 0.22;
            const sunAngle = ((t - 6.0) / 12.0) * Math.PI;
            this.sunLightDir = [Math.cos(sunAngle) * 0.75, -0.65, Math.max(0.25, Math.sin(sunAngle) * 1.5)];
        } else if (t > 17.0 && t < 20.5) {
            // Dusk / Sunset
            const p = (t - 17.0) / 3.5;
            skyR = 0.08 + (1 - Math.abs(p - 0.5) * 2) * 0.18;
            skyG = 0.06 + (1 - Math.abs(p - 0.5) * 2) * 0.06;
            skyB = 0.15 - p * 0.08;
            const sunAngle = Math.PI * (0.9 + p * 0.15);
            this.sunLightDir = [Math.cos(sunAngle) * 0.7, -0.6, Math.max(0.1, Math.sin(sunAngle) * 0.8)];
        } else if (t >= 20.5 || t < 5.0) {
            // Midnight / Moonlit Night
            skyR = 0.015; skyG = 0.018; skyB = 0.04;
            const moonAngle = (((t + 6.0) % 24) / 12.0) * Math.PI;
            this.sunLightDir = [Math.cos(moonAngle) * 0.45, 0.4, Math.max(0.15, Math.sin(moonAngle) * 0.85)];
        } else {
            // Dawn / Sunrise
            const p = (t - 5.0) / 2.5;
            skyR = 0.03 + p * 0.14;
            skyG = 0.03 + p * 0.08;
            skyB = 0.06 + p * 0.12;
            const sunAngle = p * (Math.PI * 0.25);
            this.sunLightDir = [Math.cos(sunAngle) * 0.7, -0.65, Math.max(0.15, Math.sin(sunAngle) * 1.1)];
        }

        gl.clearColor(skyR, skyG, skyB, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        // 1. Render 3D Terrain
        if (world) {
            this.updateTerrainMesh(world);

            gl.useProgram(this.terrainProgram);
            gl.uniformMatrix4fv(gl.getUniformLocation(this.terrainProgram, 'u_viewProjection'), false, this.camera.viewProj);
            gl.uniform3fv(gl.getUniformLocation(this.terrainProgram, 'u_lightDir'), this.sunLightDir);
            gl.uniform3fv(gl.getUniformLocation(this.terrainProgram, 'u_viewPos'), this.camera.eye);
            gl.uniform3fv(gl.getUniformLocation(this.terrainProgram, 'u_skyFogColor'), [skyR, skyG, skyB]);
            gl.uniform1f(gl.getUniformLocation(this.terrainProgram, 'u_time'), this.animTime);

            gl.bindVertexArray(this.terrainVAO);
            gl.drawElements(gl.TRIANGLES, this.terrainIndexCount, gl.UNSIGNED_INT, 0);
            gl.bindVertexArray(null);
        }

        // 2. Render 3D Billboards (Creatures, Drop Shadows, Weapons, Health Bars, Buildings, Particles)
        this.renderBillboards(world, entityManager, disasterManager, particleSystem, activeTool, brushSize, mouseWorldPos, timeOfDay);

        // 3. Render Animated First-Person Viewmodel & Crosshair
        if (this.isFirstPerson) {
            this.renderFPVViewmodel();
        }
    }

    renderFPVViewmodel() {
        if (!this.isFirstPerson || !this.possessedEntity) return;
        const canvas = document.getElementById('fpv-weapon-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const ent = this.possessedEntity;
        const weapon = ent.weapon || 'sword';

        ctx.save();
        ctx.translate(canvas.width * 0.5, canvas.height * 0.45);
        ctx.rotate(-0.35);

        if (weapon.includes('staff') || weapon.includes('wand') || weapon.includes('lance')) {
            // Arcane / Divine Staff
            ctx.fillStyle = '#78350f';
            ctx.fillRect(-5, -70, 10, 140);
            ctx.fillStyle = '#38bdf8';
            ctx.shadowColor = '#38bdf8';
            ctx.shadowBlur = 18;
            ctx.beginPath();
            ctx.arc(0, -85, 16, 0, Math.PI * 2);
            ctx.fill();
        } else if (weapon.includes('bow') || weapon.includes('crossbow')) {
            // Bow / Crossbow
            ctx.strokeStyle = '#92400e';
            ctx.lineWidth = 8;
            ctx.beginPath();
            ctx.arc(0, 0, 60, -Math.PI * 0.4, Math.PI * 0.4);
            ctx.stroke();
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(20, -50);
            ctx.lineTo(20, 50);
            ctx.stroke();
        } else if (weapon.includes('plasma') || weapon.includes('gun') || weapon.includes('cannon')) {
            // Plasma Gun / Cannon
            ctx.fillStyle = '#1e293b';
            ctx.fillRect(-18, -80, 36, 120);
            ctx.fillStyle = '#38bdf8';
            ctx.shadowColor = '#38bdf8';
            ctx.shadowBlur = 20;
            ctx.fillRect(-8, -100, 16, 25);
        } else {
            // Broadsword / Claws / Melee
            ctx.fillStyle = '#f59e0b';
            ctx.fillRect(-30, 20, 60, 12);
            ctx.fillStyle = '#78350f';
            ctx.fillRect(-7, 32, 14, 35);
            ctx.fillStyle = '#f59e0b';
            ctx.beginPath();
            ctx.arc(0, 72, 10, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#e2e8f0';
            ctx.shadowColor = '#38bdf8';
            ctx.shadowBlur = 12;
            ctx.beginPath();
            ctx.moveTo(0, -110);
            ctx.lineTo(14, -90);
            ctx.lineTo(12, 20);
            ctx.lineTo(-12, 20);
            ctx.lineTo(-14, -90);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(-2, -85, 4, 95);
        }

        ctx.restore();

        const isMoving = Math.hypot(ent.vx || 0, ent.vy || 0) > 0.05;
        const vmEl = document.getElementById('fpv-viewmodel');
        if (vmEl) {
            vmEl.classList.toggle('bobbing', isMoving);
        }
    }

    renderBillboards(world, entityManager, disasterManager, particleSystem, activeTool, brushSize, mouseWorldPos, timeOfDay = 12.0) {
        const gl = this.gl;
        gl.useProgram(this.billboardProgram);
        gl.uniformMatrix4fv(gl.getUniformLocation(this.billboardProgram, 'u_viewProjection'), false, this.camera.viewProj);
        gl.uniformMatrix4fv(gl.getUniformLocation(this.billboardProgram, 'u_viewMatrix'), false, this.camera.viewMat);
        gl.uniform3fv(gl.getUniformLocation(this.billboardProgram, 'u_cameraRight'), this.camera.right);
        gl.uniform3fv(gl.getUniformLocation(this.billboardProgram, 'u_cameraUp'), this.camera.up);

        let instanceCount = 0;
        const data = this.instanceData;
        const addBillboard = (wx, wy, wz, sx, sy, r, g, b, a, rot = 0, u0 = 0, v0 = 0, u1 = 1, v1 = 1) => {
            if (instanceCount >= this.instanceMaxCount) return;
            const off = instanceCount * 14;
            data[off]     = wx; data[off + 1] = wy; data[off + 2] = wz;
            data[off + 3] = sx; data[off + 4] = sy;
            data[off + 5] = r;  data[off + 6] = g;  data[off + 7] = b;  data[off + 8] = a;
            data[off + 9] = u0; data[off + 10] = v0; data[off + 11] = u1; data[off + 12] = v1;
            data[off + 13] = rot;
            instanceCount++;
        };

        const uUtil = this.utilityUVs;

        // A. 3D Brush Reticle Indicator
        if (mouseWorldPos && world && world.inBounds(Math.floor(mouseWorldPos.x), Math.floor(mouseWorldPos.y))) {
            const mx = mouseWorldPos.x;
            const my = mouseWorldPos.y;
            const mz = (world.getElevation ? world.getElevation(mx, my) : 2.0) + 0.15;
            const size = Math.max(2.5, brushSize * 2.2);
            const uv = uUtil.reticle;
            addBillboard(mx, my, mz, size, size, 0.22, 0.74, 0.97, 0.75, this.animTime * 1.5, uv.u0, uv.v0, uv.u1, uv.v1);
        }

        // B. Render Living Entities with High-Def Pixel Art, Animations, Weapons & Health Bars
        if (entityManager && Array.isArray(entityManager.entities)) {
            const ents = entityManager.entities;
            const flyingSpecies = new Set([
                'dragon', 'frost_dragon', 'shadow_dragon', 'storm_dragon', 'golden_dragon', 'cyber_dragon',
                'pterodactyl', 'seraph_angel', 'thunder_bird', 'phoenix', 'helicopter', 'starfighter',
                'valkyrie', 'gargoyle'
            ]);

            for (let i = 0; i < ents.length; i++) {
                const ent = ents[i];
                if (!ent.active) continue;

                // Skip possessed creature body in First-Person Mode
                if (this.isFirstPerson && this.possessedEntity && ent.id === this.possessedEntity.id) {
                    continue;
                }

                const groundZ = world ? (world.getElevation ? world.getElevation(ent.x, ent.y) : 2.0) : 2.0;
                let flightZ = 0;
                if (ent.isFlying || flyingSpecies.has(ent.type)) {
                    flightZ = 6.0 + Math.sin(this.animTime * 3.5 + ent.id) * 1.2;
                }

                const entZ = groundZ + flightZ;
                const entScale = Math.max(1.5, (ent.size || 2.0) * (ent.scale || 1.6));

                // 1. Soft Projected Ground Drop Shadow
                const shadowSize = entScale * (1.0 - Math.min(0.4, flightZ * 0.04));
                const shadowAlpha = Math.max(0.12, 0.45 - flightZ * 0.03);
                const sUv = uUtil.shadow;
                addBillboard(ent.x, ent.y, groundZ + 0.05, shadowSize * 1.3, shadowSize * 0.85, 0.0, 0.0, 0.0, shadowAlpha, 0, sUv.u0, sUv.v0, sUv.u1, sUv.v1);

                // 2. Animation Frame & Directional Flip
                const isMoving = Math.hypot(ent.vx, ent.vy) > 0.05;
                const frameIdx = (isMoving ? Math.floor(this.animTime * 8 + ent.id) % 2 : 0);
                const uvPair = this.spriteUVs[ent.type] || [uUtil.defaultSprite, uUtil.defaultSprite];
                const baseUv = uvPair[frameIdx] || uUtil.defaultSprite;

                const flipX = !!ent.facingLeft;
                const u0 = flipX ? baseUv.u1 : baseUv.u0;
                const u1 = flipX ? baseUv.u0 : baseUv.u1;
                const v0 = baseUv.v0;
                const v1 = baseUv.v1;

                // 3. Dying Topple Rotation, Hit Flash & Transparency
                let tiltAngle = 0;
                let alpha = 1.0;
                let hitFlash = ent.hitFlash > 0 ? 1.8 : 0.0;

                if (ent.isDying) {
                    const prog = 1.0 - (ent.deathTimer / Math.max(1, ent.maxDeathTimer || 30));
                    tiltAngle = (flipX ? -1 : 1) * prog * (Math.PI / 2);
                    alpha = Math.max(0.1, 1.0 - prog * 0.85);
                    hitFlash = (Math.floor(ent.deathTimer / 3) % 2 === 0) ? 1.5 : 0;
                } else if (ent.hasTrait && ent.hasTrait('invisibility')) {
                    alpha = 0.35;
                }

                // Creature Body Billboard
                addBillboard(
                    ent.x,
                    ent.y,
                    entZ + entScale * 0.5,
                    entScale,
                    entScale * 1.25,
                    1.0 + hitFlash,
                    1.0 + hitFlash,
                    1.0 + hitFlash,
                    alpha,
                    tiltAngle,
                    u0, v0, u1, v1
                );

                // 4. Equipped 3D Weapon Overlay
                if (ent.weapon && this.weaponUVs[ent.weapon]) {
                    const wUv = this.weaponUVs[ent.weapon];
                    const handOffX = (flipX ? -1 : 1) * entScale * 0.35;
                    const handOffZ = entZ + entScale * 0.45;
                    const wScale = entScale * 0.75;
                    const wu0 = flipX ? wUv.u1 : wUv.u0;
                    const wu1 = flipX ? wUv.u0 : wUv.u1;
                    addBillboard(ent.x + handOffX, ent.y, handOffZ, wScale, wScale, 1.0, 1.0, 1.0, alpha, tiltAngle, wu0, wUv.v0, wu1, wUv.v1);
                }

                // 5. Status Auras
                if (ent.blessed) {
                    const aUv = uUtil.blessed;
                    const aScale = entScale * 0.9;
                    addBillboard(ent.x, ent.y, entZ + entScale * 1.15, aScale, aScale, 1.0, 0.9, 0.2, 0.95, this.animTime * 1.5, aUv.u0, aUv.v0, aUv.u1, aUv.v1);
                }
                if (ent.cursed) {
                    const aUv = uUtil.cursed;
                    const aScale = entScale * 0.85;
                    addBillboard(ent.x, ent.y, entZ + entScale * 1.1, aScale, aScale, 0.8, 0.2, 0.95, 0.9, -this.animTime * 2.0, aUv.u0, aUv.v0, aUv.u1, aUv.v1);
                }
                if (ent.frozen > 0) {
                    const aUv = uUtil.frozen;
                    const aScale = entScale * 1.2;
                    addBillboard(ent.x, ent.y, entZ + entScale * 0.5, aScale, aScale * 1.2, 0.6, 0.9, 1.0, 0.8, 0, aUv.u0, aUv.v0, aUv.u1, aUv.v1);
                }

                // 6. 3D Floating Overhead Health Bar & Boss Indicator
                const isDamaged = ent.hp < ent.maxHp;
                if (!ent.isDying && (isDamaged || ent.isControlled || ent.isBoss)) {
                    const barZ = entZ + entScale * 1.25;
                    const barW = Math.max(1.8, entScale * 1.1);
                    const barH = 0.25;
                    const qUv = uUtil.white_quad;

                    // Background & Border
                    addBillboard(ent.x, ent.y, barZ, barW + 0.1, barH + 0.08, 0.08, 0.08, 0.12, 0.85, 0, qUv.u0, qUv.v0, qUv.u1, qUv.v1);

                    // Health Fill
                    const hpRatio = Math.max(0.0, Math.min(1.0, ent.hp / Math.max(1, ent.maxHp)));
                    const fillW = barW * hpRatio;
                    const fillOffX = (hpRatio - 1.0) * barW * 0.5;

                    let hpR = 0.2, hpG = 0.85, hpB = 0.3;
                    if (hpRatio < 0.28) { hpR = 0.95; hpG = 0.2; hpB = 0.2; }
                    else if (hpRatio < 0.55) { hpR = 0.95; hpG = 0.8; hpB = 0.15; }

                    addBillboard(ent.x + fillOffX, ent.y, barZ, fillW, barH, hpR, hpG, hpB, 0.95, 0, qUv.u0, qUv.v0, qUv.u1, qUv.v1);

                    // Boss / Controlled Crown Star
                    if (ent.isControlled || ent.isBoss) {
                        const starUv = uUtil.star;
                        const starSize = ent.isBoss ? 1.3 : 1.0;
                        const starPulse = Math.sin(this.animTime * 6.0) * 0.12 + 1.0;
                        addBillboard(ent.x, ent.y, barZ + 0.45, starSize * starPulse, starSize * starPulse, 1.0, 0.9, 0.2, 1.0, 0, starUv.u0, starUv.v0, starUv.u1, starUv.v1);
                    }
                }

                // 7. Controlled Hero Reticle Ring
                if (ent.isControlled) {
                    const retUv = uUtil.reticle;
                    const retPulse = Math.sin(this.animTime * 8.0) * 0.2 + 1.3;
                    addBillboard(ent.x, ent.y, groundZ + 0.08, entScale * 1.6 * retPulse, entScale * 1.6 * retPulse, 0.98, 0.85, 0.1, 0.9, this.animTime * 2.0, retUv.u0, retUv.v0, retUv.u1, retUv.v1);
                }
            }
        }

        // First-Person Viewmodel in Foreground
        if (this.isFirstPerson && this.possessedEntity && this.possessedEntity.active) {
            const ent = this.possessedEntity;
            const cam = this.camera;
            const isMoving = Math.hypot(ent.vx || 0, ent.vy || 0) > 0.05;
            const bob = Math.sin(this.animTime * 10.0) * (isMoving ? 0.035 : 0.008);
            const sway = Math.cos(this.animTime * 5.0) * (isMoving ? 0.025 : 0.005);

            const vmX = cam.eye[0] + cam.forward[0] * 0.72 + cam.right[0] * (0.32 + sway) - cam.up[0] * (0.24 + bob);
            const vmY = cam.eye[1] + cam.forward[1] * 0.72 + cam.right[1] * (0.32 + sway) - cam.up[1] * (0.24 + bob);
            const vmZ = cam.eye[2] + cam.forward[2] * 0.72 + cam.right[2] * (0.32 + sway) - cam.up[2] * (0.24 + bob);

            let vmUv = null;
            if (ent.weapon && this.weaponUVs[ent.weapon]) {
                vmUv = this.weaponUVs[ent.weapon];
            } else if (this.spriteUVs[ent.type]) {
                vmUv = this.spriteUVs[ent.type][0];
            } else {
                vmUv = uUtil.defaultSprite;
            }

            const vmSize = 0.52;
            addBillboard(vmX, vmY, vmZ, vmSize, vmSize, 1.0, 1.0, 1.0, 1.0, 0.12 + bob * 2.0, vmUv.u0, vmUv.v0, vmUv.u1, vmUv.v1);
        }

        // C. Render 3D Era Buildings Architecture
        if (entityManager && Array.isArray(entityManager.buildings)) {
            const qUv = uUtil.white_quad;
            const sUv = uUtil.shadow;
            const starUv = uUtil.starlight;

            for (let i = 0; i < entityManager.buildings.length; i++) {
                const b = entityManager.buildings[i];
                const bz = world ? (world.getElevation ? world.getElevation(b.x, b.y) : 2.0) : 2.0;
                const bScale = Math.max(2.4, (b.width || 3) * 1.15);

                // Ground Drop Shadow
                addBillboard(b.x, b.y, bz + 0.04, bScale * 1.5, bScale * 0.95, 0, 0, 0, 0.48, 0, sUv.u0, sUv.v0, sUv.u1, sUv.v1);

                if (b.type === 'cottage') {
                    // Bronze/Iron Age Thatched Stone Cottage
                    addBillboard(b.x, b.y, bz + bScale * 0.45, bScale, bScale * 0.9, 0.44, 0.44, 0.48, 0.98, 0, qUv.u0, qUv.v0, qUv.u1, qUv.v1);
                    addBillboard(b.x, b.y, bz + bScale * 0.95, bScale * 1.1, bScale * 0.5, 0.79, 0.54, 0.02, 0.98, 0, qUv.u0, qUv.v0, qUv.u1, qUv.v1);
                } else if (b.type === 'blacksmith') {
                    // Dark stone forge with glowing fire top
                    addBillboard(b.x, b.y, bz + bScale * 0.5, bScale, bScale * 1.0, 0.25, 0.25, 0.27, 0.98, 0, qUv.u0, qUv.v0, qUv.u1, qUv.v1);
                    const forgeGlow = Math.sin(this.animTime * 10.0 + i) * 0.2 + 0.9;
                    addBillboard(b.x, b.y, bz + bScale * 0.9, bScale * 0.45, bScale * 0.45, 0.95 * forgeGlow, 0.45 * forgeGlow, 0.05, 0.95, 0, starUv.u0, starUv.v0, starUv.u1, starUv.v1);
                } else if (b.type === 'fortress') {
                    // Medieval Keep with twin battlements and banner
                    addBillboard(b.x, b.y, bz + bScale * 0.7, bScale * 1.3, bScale * 1.4, 0.28, 0.33, 0.41, 0.98, 0, qUv.u0, qUv.v0, qUv.u1, qUv.v1);
                    const bCol = this.hexToRgba(b.color || '#ef4444');
                    addBillboard(b.x, b.y, bz + bScale * 1.5, bScale * 0.35, bScale * 0.7, bCol[0], bCol[1], bCol[2], 0.95, 0, qUv.u0, qUv.v0, qUv.u1, qUv.v1);
                } else if (b.type === 'watchtower') {
                    // Tall defensive watchtower
                    addBillboard(b.x, b.y, bz + bScale * 1.1, bScale * 0.65, bScale * 2.2, 0.39, 0.45, 0.55, 0.98, 0, qUv.u0, qUv.v0, qUv.u1, qUv.v1);
                    addBillboard(b.x, b.y, bz + bScale * 2.3, bScale * 0.4, bScale * 0.4, 0.99, 0.88, 0.28, 0.95, 0, starUv.u0, starUv.v0, starUv.u1, starUv.v1);
                } else if (b.type === 'factory') {
                    // Industrial Age Brick Factory with Twin Smokestacks
                    addBillboard(b.x, b.y, bz + bScale * 0.55, bScale * 1.25, bScale * 1.1, 0.6, 0.11, 0.11, 0.98, 0, qUv.u0, qUv.v0, qUv.u1, qUv.v1);
                    const pz = bz + bScale * 1.3 + Math.sin(this.animTime * 6.0 + i) * 0.3;
                    addBillboard(b.x - bScale * 0.3, b.y, pz, bScale * 0.5, bScale * 0.5, 0.3, 0.3, 0.35, 0.7, 0, sUv.u0, sUv.v0, sUv.u1, sUv.v1);
                    addBillboard(b.x + bScale * 0.3, b.y, pz + 0.4, bScale * 0.55, bScale * 0.55, 0.35, 0.35, 0.4, 0.6, 0, sUv.u0, sUv.v0, sUv.u1, sUv.v1);
                } else if (b.type === 'plasma_pylon') {
                    // Cosmic Age Neon Obelisk
                    addBillboard(b.x, b.y, bz + bScale * 1.1, bScale * 0.5, bScale * 2.2, 0.01, 0.52, 0.78, 0.98, 0, qUv.u0, qUv.v0, qUv.u1, qUv.v1);
                    const pulse = Math.sin(this.animTime * 8.0 + i) * 0.2 + 1.0;
                    addBillboard(b.x, b.y, bz + bScale * 2.35, bScale * 0.7 * pulse, bScale * 0.7 * pulse, 0.22, 0.74, 0.97, 0.98, 0, starUv.u0, starUv.v0, starUv.u1, starUv.v1);
                } else if (b.type === 'shield_generator') {
                    // Forcefield Dome Generator
                    addBillboard(b.x, b.y, bz + bScale * 0.45, bScale, bScale * 0.9, 0.28, 0.33, 0.41, 0.98, 0, qUv.u0, qUv.v0, qUv.u1, qUv.v1);
                    const domePulse = Math.sin(this.animTime * 5.0 + i) * 0.15 + 1.0;
                    addBillboard(b.x, b.y, bz + bScale * 0.75, bScale * 2.0 * domePulse, bScale * 1.5 * domePulse, 0.66, 0.33, 0.97, 0.5, 0, sUv.u0, sUv.v0, sUv.u1, sUv.v1);
                } else if (b.type === 'townhall') {
                    // Grand Stone Citadel
                    const bCol = this.hexToRgba(b.color || '#3b82f6');
                    addBillboard(b.x, b.y, bz + bScale * 0.7, bScale * 1.4, bScale * 1.4, 0.39, 0.45, 0.55, 0.98, 0, qUv.u0, qUv.v0, qUv.u1, qUv.v1);
                    addBillboard(b.x, b.y, bz + bScale * 1.6, bScale * 0.45, bScale * 0.9, bCol[0], bCol[1], bCol[2], 0.98, 0, qUv.u0, qUv.v0, qUv.u1, qUv.v1);
                } else {
                    const bCol = this.hexToRgba(b.color || '#8d6e63');
                    addBillboard(b.x, b.y, bz + bScale * 0.5, bScale, bScale * 1.1, bCol[0], bCol[1], bCol[2], 0.95, 0, qUv.u0, qUv.v0, qUv.u1, qUv.v1);
                }
            }
        }

        // D. Render 3D Particles
        if (particleSystem && Array.isArray(particleSystem.particles)) {
            const parts = particleSystem.particles;
            const pUv = uUtil.shadow; // soft circle
            const starUv = uUtil.starlight;
            for (let i = 0; i < parts.length; i++) {
                const p = parts[i];
                if (!p.active) continue;

                const pGround = world ? (world.getElevation ? world.getElevation(p.x, p.y) : 2.0) : 2.0;
                let pZ = pGround + 0.4;
                if (p.type === 'smoke' || p.type === 'fire') {
                    pZ += (1.0 - p.life / p.maxLife) * 8.0;
                } else if (p.type === 'stardust' || p.type === 'soul') {
                    pZ += Math.sin(this.animTime * 4.0 + i) * 1.5 + 2.0;
                }

                const pCol = this.hexToRgba(p.color || '#ffffff', Math.min(1.0, p.life / p.maxLife));
                const pSize = Math.max(0.6, (p.size || 1.0) * 1.2);
                const uv = (p.type === 'stardust' || p.type === 'spark') ? starUv : pUv;
                addBillboard(p.x, p.y, pZ, pSize, pSize, pCol[0], pCol[1], pCol[2], pCol[3], 0, uv.u0, uv.v0, uv.u1, uv.v1);
            }
        }

        // E. Render 3D Projectiles
        if (entityManager && Array.isArray(entityManager.projectiles)) {
            const projs = entityManager.projectiles;
            const qUv = uUtil.white_quad;
            const starUv = uUtil.starlight;
            for (let i = 0; i < projs.length; i++) {
                const p = projs[i];
                const gz = world ? (world.getElevation ? world.getElevation(p.x, p.y) : 2.0) : 2.0;
                let pz = gz + 1.2;
                if (p.type === 'arrow') {
                    const progress = p.progress !== undefined ? p.progress : 0.5;
                    pz += Math.sin(progress * Math.PI) * 4.0;
                    addBillboard(p.x, p.y, pz, 1.0, 0.4, 0.9, 0.9, 0.95, 1.0, 0, qUv.u0, qUv.v0, qUv.u1, qUv.v1);
                } else if (p.type === 'fireball') {
                    const pulse = Math.sin(this.animTime * 12.0 + i) * 0.3 + 1.2;
                    addBillboard(p.x, p.y, pz + 0.3, 1.8 * pulse, 1.8 * pulse, 0.96, 0.45, 0.05, 0.95, 0, uUtil.shadow.u0, uUtil.shadow.v0, uUtil.shadow.u1, uUtil.shadow.v1);
                    addBillboard(p.x, p.y, pz + 0.3, 0.9, 0.9, 1.0, 0.9, 0.2, 1.0, 0, starUv.u0, starUv.v0, starUv.u1, starUv.v1);
                } else if (p.type === 'laser' || p.type === 'blaster') {
                    addBillboard(p.x, p.y, pz, 1.6, 0.5, 0.1, 0.9, 1.0, 1.0, 0, qUv.u0, qUv.v0, qUv.u1, qUv.v1);
                } else if (p.type === 'frost') {
                    addBillboard(p.x, p.y, pz, 1.4, 1.4, 0.6, 0.95, 1.0, 0.9, 0, uUtil.frozen.u0, uUtil.frozen.v0, uUtil.frozen.u1, uUtil.frozen.v1);
                } else {
                    addBillboard(p.x, p.y, pz, 1.2, 1.2, 0.8, 0.4, 1.0, 0.95, 0, starUv.u0, starUv.v0, starUv.u1, starUv.v1);
                }
            }
        }

        // F. Render 3D Disasters (Meteors, Nukes, UFOs, Tornadoes, Black Holes, Forcefields)
        if (disasterManager) {
            const qUv = uUtil.white_quad;
            const sUv = uUtil.shadow;

            // 1. Meteors
            if (Array.isArray(disasterManager.meteors)) {
                for (let i = 0; i < disasterManager.meteors.length; i++) {
                    const m = disasterManager.meteors[i];
                    if (!m.active) continue;
                    const gz = world ? (world.getElevation ? world.getElevation(m.x, m.y) : 2.0) : 2.0;
                    const distToTarget = Math.hypot(m.targetX - m.x, m.targetY - m.y);
                    const altitude = gz + Math.max(0, distToTarget * 0.8);
                    const mSize = Math.max(3.5, (m.size || 4.0) * 1.5);
                    addBillboard(m.x, m.y, altitude, mSize, mSize, 0.98, 0.4, 0.05, 0.95, this.animTime * 3.0, sUv.u0, sUv.v0, sUv.u1, sUv.v1);
                    addBillboard(m.x, m.y, altitude, mSize * 0.6, mSize * 0.6, 1.0, 0.9, 0.2, 1.0, 0, uUtil.starlight.u0, uUtil.starlight.v0, uUtil.starlight.u1, uUtil.starlight.v1);
                    addBillboard(m.targetX, m.targetY, gz + 0.05, mSize * 1.5, mSize * 1.5, 0.8, 0.1, 0.0, 0.4, 0, sUv.u0, sUv.v0, sUv.u1, sUv.v1);
                }
            }

            // 2. Nuke Missiles
            if (Array.isArray(disasterManager.nukeMissiles)) {
                for (let i = 0; i < disasterManager.nukeMissiles.length; i++) {
                    const n = disasterManager.nukeMissiles[i];
                    if (!n.active) continue;
                    const gz = world ? (world.getElevation ? world.getElevation(n.x, n.y) : 2.0) : 2.0;
                    const alt = gz + Math.max(0, (n.altitude || (n.targetY - n.y)));
                    addBillboard(n.x, n.y, alt, 2.5, 5.0, 0.9, 0.9, 0.95, 1.0, 0, qUv.u0, qUv.v0, qUv.u1, qUv.v1);
                    addBillboard(n.x, n.y, alt - 2.5, 2.0, 2.0, 1.0, 0.5, 0.1, 0.9, 0, sUv.u0, sUv.v0, sUv.u1, sUv.v1);
                }
            }

            // 3. UFOs
            if (Array.isArray(disasterManager.ufos)) {
                for (let i = 0; i < disasterManager.ufos.length; i++) {
                    const u = disasterManager.ufos[i];
                    if (!u.active) continue;
                    const gz = world ? (world.getElevation ? world.getElevation(u.x, u.y) : 2.0) : 2.0;
                    const ufoZ = gz + 10.0 + Math.sin(this.animTime * 2.0 + i) * 1.0;
                    addBillboard(u.x, u.y, ufoZ, 6.5, 3.2, 0.3, 0.8, 0.95, 0.95, 0, qUv.u0, qUv.v0, qUv.u1, qUv.v1);
                    addBillboard(u.x, u.y, ufoZ + 0.5, 3.2, 1.8, 0.2, 1.0, 0.5, 1.0, 0, sUv.u0, sUv.v0, sUv.u1, sUv.v1);
                }
            }

            // 4. Tornadoes
            if (Array.isArray(disasterManager.tornadoes)) {
                for (let i = 0; i < disasterManager.tornadoes.length; i++) {
                    const t = disasterManager.tornadoes[i];
                    if (!t.active) continue;
                    const gz = world ? (world.getElevation ? world.getElevation(t.x, t.y) : 2.0) : 2.0;
                    for (let h = 0; h < 8; h++) {
                        const ringZ = gz + h * 1.8;
                        const ringWidth = (t.radius || 6) * (0.5 + (h / 8) * 1.2);
                        const sway = Math.sin(this.animTime * 6.0 + h) * 0.8;
                        const rot = this.animTime * 8.0 + h * 0.5;
                        addBillboard(t.x + sway, t.y, ringZ, ringWidth, 2.0, 0.75, 0.8, 0.85, 0.45, rot, sUv.u0, sUv.v0, sUv.u1, sUv.v1);
                    }
                }
            }

            // 5. Black Holes
            if (Array.isArray(disasterManager.blackHoles)) {
                for (let i = 0; i < disasterManager.blackHoles.length; i++) {
                    const bh = disasterManager.blackHoles[i];
                    if (!bh.active) continue;
                    const gz = world ? (world.getElevation ? world.getElevation(bh.x, bh.y) : 2.0) : 2.0;
                    const bhZ = gz + 4.0;
                    const radius = (bh.radius || 12) * 1.2;
                    addBillboard(bh.x, bh.y, bhZ, radius * 2.2, radius * 0.9, 0.9, 0.4, 0.95, 0.7, this.animTime * 3.0, sUv.u0, sUv.v0, sUv.u1, sUv.v1);
                    addBillboard(bh.x, bh.y, bhZ, radius, radius, 0.02, 0.02, 0.04, 1.0, 0, sUv.u0, sUv.v0, sUv.u1, sUv.v1);
                }
            }

            // 6. Forcefields
            if (Array.isArray(disasterManager.forcefields)) {
                for (let i = 0; i < disasterManager.forcefields.length; i++) {
                    const ff = disasterManager.forcefields[i];
                    if (!ff.active) continue;
                    const gz = world ? (world.getElevation ? world.getElevation(ff.x, ff.y) : 2.0) : 2.0;
                    const ffRad = ff.radius || 20;
                    const pulse = Math.sin(this.animTime * 4.0) * 0.08 + 0.92;
                    addBillboard(ff.x, ff.y, gz + ffRad * 0.5, ffRad * 2.0 * pulse, ffRad * 1.8 * pulse, 0.2, 0.7, 1.0, 0.4, 0, sUv.u0, sUv.v0, sUv.u1, sUv.v1);
                }
            }
        }

        // G. Volumetric 3D Weather Precipitation (Snow, Rain, Acid, Volcanic Ash)
        if (disasterManager && disasterManager.weather && disasterManager.weather !== 'clear') {
            const wType = disasterManager.weather;
            const cam = this.camera;
            const weatherCount = 160;
            const boxRadius = 45;
            const cx = cam.eye[0];
            const cy = cam.eye[1];
            const cz = cam.eye[2];

            const qUv = uUtil.white_quad;
            const sUv = uUtil.shadow;
            const starUv = uUtil.starlight;

            for (let i = 0; i < weatherCount; i++) {
                const seed = i * 197.3;
                const relX = ((Math.sin(seed * 1.7) * 43758.54 % 1) * 2 - 1) * boxRadius;
                const relY = ((Math.cos(seed * 2.3) * 43758.54 % 1) * 2 - 1) * boxRadius;

                let fallSpeed = 12.0;
                let sway = 0;
                let wx = cx + relX;
                let wy = cy + relY;
                let wz = 0;

                if (wType === 'snow') {
                    fallSpeed = 4.8;
                    sway = Math.sin(this.animTime * 3.0 + i) * 1.6;
                    const fallDist = (this.animTime * fallSpeed + i * 0.7) % (boxRadius * 1.5);
                    wz = cz + (boxRadius * 0.75) - fallDist;
                    addBillboard(wx + sway, wy, wz, 0.5, 0.5, 0.95, 0.98, 1.0, 0.85, 0, sUv.u0, sUv.v0, sUv.u1, sUv.v1);
                } else if (wType === 'rain') {
                    fallSpeed = 28.0;
                    const fallDist = (this.animTime * fallSpeed + i * 1.2) % (boxRadius * 1.5);
                    wz = cz + (boxRadius * 0.75) - fallDist;
                    addBillboard(wx, wy, wz, 0.18, 1.3, 0.45, 0.75, 0.98, 0.8, 0, qUv.u0, qUv.v0, qUv.u1, qUv.v1);
                } else if (wType === 'acid') {
                    fallSpeed = 24.0;
                    const fallDist = (this.animTime * fallSpeed + i * 1.1) % (boxRadius * 1.5);
                    wz = cz + (boxRadius * 0.75) - fallDist;
                    addBillboard(wx, wy, wz, 0.22, 1.1, 0.35, 0.95, 0.45, 0.85, 0, qUv.u0, qUv.v0, qUv.u1, qUv.v1);
                } else if (wType === 'ash' || wType === 'sandstorm') {
                    fallSpeed = 5.2;
                    const driftX = (this.animTime * 15.0 + i * 3.2) % (boxRadius * 2) - boxRadius;
                    const fallDist = (this.animTime * fallSpeed + i * 0.8) % (boxRadius * 1.5);
                    wz = cz + (boxRadius * 0.75) - fallDist;
                    if (wType === 'ash') {
                        addBillboard(cx + driftX, wy, wz, 0.55, 0.55, 0.95, 0.4, 0.1, 0.9, this.animTime * 2.5, starUv.u0, starUv.v0, starUv.u1, starUv.v1);
                    } else {
                        addBillboard(cx + driftX, wy, wz, 0.65, 0.65, 0.88, 0.72, 0.42, 0.65, 0, sUv.u0, sUv.v0, sUv.u1, sUv.v1);
                    }
                }
            }
        }

        // Upload & Draw All Billboards in a Single Instanced Draw Call
        if (instanceCount > 0) {
            gl.bindVertexArray(this.billboardVAO);
            gl.bindBuffer(gl.ARRAY_BUFFER, this.instanceVBO);
            gl.bufferSubData(gl.ARRAY_BUFFER, 0, data.subarray(0, instanceCount * 14));

            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, this.spriteTexture);
            gl.uniform1i(gl.getUniformLocation(this.billboardProgram, 'u_spriteTexture'), 0);

            gl.drawArraysInstanced(gl.TRIANGLES, 0, 6, instanceCount);
            gl.bindVertexArray(null);
        }
    }

    // --- 3D Creature Creator Turntable Studio ---
    renderCreatureStudio3D(customData, targetCanvas, animTime = 0, orbitAngle = null) {
        if (!targetCanvas) return;
        const ctx = targetCanvas.getContext('2d');
        if (!ctx) return;

        const w = targetCanvas.width;
        const h = targetCanvas.height;
        ctx.clearRect(0, 0, w, h);

        const angle = orbitAngle !== null ? orbitAngle : (animTime * 1.2);
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);
        const isFacingAway = sinA < 0;

        const cx = w * 0.5;
        const cy = h * 0.52;

        // 1. Studio Radial Ambient Glow
        const bgGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, w * 0.65);
        bgGrad.addColorStop(0, 'rgba(30, 27, 75, 0.95)');
        bgGrad.addColorStop(0.65, 'rgba(15, 23, 42, 0.98)');
        bgGrad.addColorStop(1, 'rgba(3, 7, 18, 1.0)');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, w, h);

        // 2. Multi-tier 3D Turntable Pedestal
        const pedY = cy + 34;
        const pedRx = w * 0.38;
        const pedRy = pedRx * 0.38;

        // Pedestal base cylinder rim (depth)
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.ellipse(cx, pedY + 8, pedRx, pedRy, 0, 0, Math.PI * 2);
        ctx.fill();

        // Pedestal cylinder wall
        ctx.fillStyle = '#1e293b';
        ctx.beginPath();
        ctx.moveTo(cx - pedRx, pedY);
        ctx.lineTo(cx - pedRx, pedY + 8);
        ctx.ellipse(cx, pedY + 8, pedRx, pedRy, 0, 0, Math.PI, false);
        ctx.lineTo(cx + pedRx, pedY);
        ctx.ellipse(cx, pedY, pedRx, pedRy, 0, 0, Math.PI, true);
        ctx.closePath();
        ctx.fill();

        // Pedestal top surface
        const surfGrad = ctx.createRadialGradient(cx, pedY - 4, 0, cx, pedY, pedRx);
        surfGrad.addColorStop(0, '#334155');
        surfGrad.addColorStop(0.7, '#1e293b');
        surfGrad.addColorStop(1, '#0f172a');
        ctx.fillStyle = surfGrad;
        ctx.beginPath();
        ctx.ellipse(cx, pedY, pedRx, pedRy, 0, 0, Math.PI * 2);
        ctx.fill();

        // Pedestal glowing rune ring
        const glowCol = (customData && customData.colorGlow) || '#facc15';
        ctx.strokeStyle = glowCol;
        ctx.lineWidth = 1.5;
        ctx.globalAlpha = 0.7 + Math.sin(animTime * 3) * 0.25;
        ctx.beginPath();
        ctx.ellipse(cx, pedY, pedRx * 0.78, pedRy * 0.78, 0, 0, Math.PI * 2);
        ctx.stroke();

        // 3D Rotating Arcane Rune notches along ring
        for (let i = 0; i < 8; i++) {
            const runeAngle = angle * 0.6 + i * (Math.PI / 4);
            const rx = cx + Math.cos(runeAngle) * pedRx * 0.78;
            const ry = pedY + Math.sin(runeAngle) * pedRy * 0.78;
            ctx.fillStyle = glowCol;
            ctx.fillRect(rx - 1.5, ry - 1.5, 3, 3);
        }
        ctx.globalAlpha = 1.0;

        // 3. Dynamic Drop Shadow on Pedestal
        const bob = Math.sin(animTime * 4.0) * 3;
        const shadowScale = 1.0 - Math.min(0.2, (bob + 3) * 0.02);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.55)';
        ctx.beginPath();
        ctx.ellipse(cx, pedY - 2, pedRx * 0.45 * shadowScale, pedRy * 0.45 * shadowScale, 0, 0, Math.PI * 2);
        ctx.fill();

        // 4. Creature 3D Perspective Billboard / Anatomy
        const col = (customData && customData.color) || '#ea580c';
        const sec = (customData && customData.colorSec) || '#38bdf8';
        const glow = glowCol;
        const head = (customData && customData.head) || 'humanoid';
        const body = (customData && customData.body) || 'standard';
        const arms = (customData && customData.arms) || 'bipedal_arms';
        const legs = (customData && customData.legs) || 'bipedal_legs';
        const back = (customData && customData.back) || 'none';
        const weapon = (customData && customData.weapon) || 'none';

        const creatureY = cy - 2 + bob;
        // Horizontal perspective scaling
        const xPerspective = Math.max(0.35, Math.abs(cosA));
        const facingLeft = cosA < 0;

        const drawBackParts = () => {
            if (back === 'demon_wings' || back === 'angel_wings' || back === 'dragon_wings') {
                const wingSpread = Math.sin(animTime * 5.0) * 4;
                const wingCol = back === 'demon_wings' ? '#450a0a' : (back === 'angel_wings' ? '#ffffff' : sec);
                // Left wing
                ctx.fillStyle = wingCol;
                ctx.fillRect(cx - 32 * xPerspective, creatureY - 18 + wingSpread, 16 * xPerspective, 20);
                ctx.fillRect(cx - 38 * xPerspective, creatureY - 24 + wingSpread, 14 * xPerspective, 14);
                // Right wing
                ctx.fillRect(cx + 16 * xPerspective, creatureY - 18 - wingSpread, 16 * xPerspective, 20);
                ctx.fillRect(cx + 24 * xPerspective, creatureY - 24 - wingSpread, 14 * xPerspective, 14);
            } else if (back === 'starlight_halo') {
                ctx.fillStyle = glow;
                ctx.beginPath();
                ctx.ellipse(cx, creatureY - 32, 18 * xPerspective, 6, 0, 0, Math.PI * 2);
                ctx.stroke();
            } else if (back === 'spiky_carapace') {
                ctx.fillStyle = sec;
                ctx.fillRect(cx - 18 * xPerspective, creatureY - 14, 6 * xPerspective, 10);
                ctx.fillRect(cx + 12 * xPerspective, creatureY - 14, 6 * xPerspective, 10);
            }
        };

        // Draw back parts behind body if facing towards viewer
        if (!isFacingAway) drawBackParts();

        // Legs
        ctx.fillStyle = sec;
        const legBob = Math.sin(animTime * 6.0) * 2;
        ctx.fillRect(cx - 12 * xPerspective, creatureY + 8, 8 * xPerspective, 16 + legBob);
        ctx.fillRect(cx + 4 * xPerspective, creatureY + 8, 8 * xPerspective, 16 - legBob);

        // Torso / Body
        ctx.fillStyle = col;
        ctx.fillRect(cx - 14 * xPerspective, creatureY - 12, 28 * xPerspective, 22);
        // Chest plate / secondary armor
        ctx.fillStyle = sec;
        ctx.fillRect(cx - 9 * xPerspective, creatureY - 8, 18 * xPerspective, 14);

        // Head
        ctx.fillStyle = col;
        ctx.fillRect(cx - 12 * xPerspective, creatureY - 28, 24 * xPerspective, 18);

        // Eyes / Visor (only visible if facing frontwards)
        if (!isFacingAway) {
            ctx.fillStyle = glow;
            if (facingLeft) {
                ctx.fillRect(cx - 10 * xPerspective, creatureY - 22, 6 * xPerspective, 4);
            } else {
                ctx.fillRect(cx + 4 * xPerspective, creatureY - 22, 6 * xPerspective, 4);
            }
        }

        // Arms & Weapon in hand
        const handX = cx + (facingLeft ? -20 : 20) * xPerspective;
        const handY = creatureY + 2;
        ctx.fillStyle = sec;
        ctx.fillRect(handX - 4 * xPerspective, handY - 4, 8 * xPerspective, 12);

        // Weapon (drawn at hand)
        if (weapon && weapon !== 'none') {
            ctx.fillStyle = glow;
            ctx.fillRect(handX - 2, handY - 14, 4, 20);
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(handX - 4, handY - 16, 8, 4);
        }

        // Draw back parts in front of body if facing away from viewer
        if (isFacingAway) drawBackParts();

        // 5. 3D Floating Elemental Sparkles around Pedestal
        for (let i = 0; i < 6; i++) {
            const orbAng = animTime * 2.0 + i * (Math.PI / 3);
            const ox = cx + Math.cos(orbAng) * (pedRx * 0.95);
            const oy = creatureY - 10 + Math.sin(orbAng) * (pedRy * 0.95) + Math.sin(animTime * 3 + i) * 8;
            ctx.fillStyle = glow;
            ctx.globalAlpha = 0.8;
            ctx.fillRect(ox - 1.5, oy - 1.5, 3, 3);
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(ox - 0.5, oy - 0.5, 1, 1);
        }
        ctx.globalAlpha = 1.0;

        // 6. Turntable Studio Overlay Labels
        ctx.fillStyle = 'rgba(56, 189, 248, 0.85)';
        ctx.font = '10px monospace';
        ctx.textAlign = 'center';
        if (typeof ctx.fillText === 'function') {
            ctx.fillText('3D TURNTABLE ' + Math.round(((angle % (Math.PI * 2)) + (Math.PI * 2)) % (Math.PI * 2) * 180 / Math.PI) + '°', cx, h - 8);
        }
    }
}

window.Renderer3D = Renderer3D;
