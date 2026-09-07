// ==========================================
// GALAXYBOX - WebGL 2.0 3D Rendering Engine
// Hardware-Accelerated 3D Voxel Heightfield,
// 360° Orbit Camera, 3D Lighting & Shadows
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
uniform float u_time;

out vec4 fragColor;

void main() {
    vec3 normal = normalize(v_normal);
    vec3 lightDir = normalize(u_lightDir);
    vec3 viewDir = normalize(u_viewPos - v_worldPos);

    // Lambertian Diffuse Lighting
    float diff = max(dot(normal, lightDir), 0.0);
    float ambient = 0.42;
    float light = ambient + diff * 0.58;

    vec3 baseColor = v_color.rgb;

    // Specular wave highlights on water / crystal / ice
    if (v_tileType == 1.0 || v_tileType == 2.0 || v_tileType == 10.0 || v_tileType == 22.0) {
        vec3 reflectDir = reflect(-lightDir, normal);
        float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32.0);
        baseColor += vec3(0.35, 0.55, 0.75) * spec;
    }

    // Molten Lava Glow
    if (v_tileType == 11.0) {
        float pulse = sin(u_time * 4.0 + v_worldPos.x * 0.2 + v_worldPos.y * 0.2) * 0.15 + 0.85;
        baseColor *= pulse * 1.25;
        light = max(light, 0.85); // Self-illuminated
    }

    // Radioactive Acid Sizzle Glow
    if (v_tileType == 12.0) {
        baseColor *= (sin(u_time * 5.0) * 0.1 + 0.95);
        light = max(light, 0.75);
    }

    // Ambient Occlusion in deep crevices
    if (v_worldPos.z < 0.8) {
        light *= 0.85;
    }

    vec3 finalColor = baseColor * light;

    // Cosmic distance fog blending into dark space
    float dist = length(u_viewPos - v_worldPos);
    float fogFactor = clamp((dist - 90.0) / 280.0, 0.0, 0.85);
    vec3 fogColor = vec3(0.04, 0.04, 0.08);
    finalColor = mix(finalColor, fogColor, fogFactor);

    fragColor = vec4(finalColor, v_color.a);
}
`;

// Billboard Quad Shader for 3D Entities, Weapons & Particles
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

uniform sampler2D u_texture;
uniform bool u_useTexture;

out vec4 fragColor;

void main() {
    if (u_useTexture) {
        vec4 texColor = texture(u_texture, v_uv);
        if (texColor.a < 0.1) discard;
        fragColor = texColor * v_color;
    } else {
        // Procedural radial falloff for drop shadows and circular particles
        float dist = length(v_uv - 0.5) * 2.0;
        if (dist > 1.0) discard;
        float alpha = smoothstep(1.0, 0.7, dist) * v_color.a;
        fragColor = vec4(v_color.rgb, alpha);
    }
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

        // 2D Offscreen Canvas for Sprite Generation / Texture Atlas
        this.spriteCanvas = document.createElement('canvas');
        this.spriteCanvas.width = 1024;
        this.spriteCanvas.height = 1024;
        this.spriteCtx = this.spriteCanvas.getContext('2d');
        this.spriteTexture = gl.createTexture();
        this.textureDirty = true;
        this.cachedSprites = new Map();

        // Color Hex to RGBA cache
        this.colorCache = new Map();

        // Mouse Drag / Orbit State
        this.isOrbiting = false;
        this.isPanning = false;
        this.lastMouseX = 0;
        this.lastMouseY = 0;
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

        // Instance buffers (worldPos: vec3, size: vec2, color: vec4, texCoords: vec4, rotation: float)
        this.instanceMaxCount = 8000;
        this.instanceData = new Float32Array(this.instanceMaxCount * 14); // 3 + 2 + 4 + 4 + 1 = 14 floats
        this.instanceVBO = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.instanceVBO);
        gl.bufferData(gl.ARRAY_BUFFER, this.instanceData.byteLength, gl.DYNAMIC_DRAW);

        const stride = 14 * 4;
        // location 1: worldPos (vec3)
        gl.enableVertexAttribArray(1);
        gl.vertexAttribPointer(1, 3, gl.FLOAT, false, stride, 0);
        gl.vertexAttribDivisor(1, 1);

        // location 2: size (vec2)
        gl.enableVertexAttribArray(2);
        gl.vertexAttribPointer(2, 2, gl.FLOAT, false, stride, 3 * 4);
        gl.vertexAttribDivisor(2, 1);

        // location 3: color (vec4)
        gl.enableVertexAttribArray(3);
        gl.vertexAttribPointer(3, 4, gl.FLOAT, false, stride, 5 * 4);
        gl.vertexAttribDivisor(3, 1);

        // location 4: texCoords (vec4)
        gl.enableVertexAttribArray(4);
        gl.vertexAttribPointer(4, 4, gl.FLOAT, false, stride, 9 * 4);
        gl.vertexAttribDivisor(4, 1);

        // location 5: rotation (float)
        gl.enableVertexAttribArray(5);
        gl.vertexAttribPointer(5, 1, gl.FLOAT, false, stride, 13 * 4);
        gl.vertexAttribDivisor(5, 1);

        gl.bindVertexArray(null);
    }

    hexToRgba(hex, alpha = 1.0) {
        if (!hex || hex[0] !== '#') return [1, 1, 1, alpha];
        const key = hex + alpha;
        if (this.colorCache.has(key)) return this.colorCache.get(key);

        let r = 255, g = 255, b = 255;
        if (hex.length === 7) {
            r = parseInt(hex.substring(1, 3), 16);
            g = parseInt(hex.substring(3, 5), 16);
            b = parseInt(hex.substring(5, 7), 16);
        } else if (hex.length === 4) {
            r = parseInt(hex[1] + hex[1], 16);
            g = parseInt(hex[2] + hex[2], 16);
            b = parseInt(hex[3] + hex[3], 16);
        }
        const rgba = [r / 255, g / 255, b / 255, alpha];
        this.colorCache.set(key, rgba);
        return rgba;
    }

    // --- Camera Control Methods ---
    orbit(deltaX, deltaY) {
        const cam = this.camera;
        const sensitivity = 0.005;
        cam.yaw -= deltaX * sensitivity;
        cam.pitch = Math.max(0.12, Math.min(1.48, cam.pitch - deltaY * sensitivity));
    }

    pan(deltaX, deltaY) {
        const cam = this.camera;
        const factor = cam.distance * 0.0018;
        cam.target[0] -= (cam.right[0] * deltaX - cam.forward[0] * deltaY) * factor;
        cam.target[1] -= (cam.right[1] * deltaX - cam.forward[1] * deltaY) * factor;
    }

    zoom(delta) {
        const cam = this.camera;
        const factor = delta > 0 ? 1.14 : 0.88;
        cam.distance = Math.max(cam.minDistance, Math.min(cam.maxDistance, cam.distance * factor));
    }

    setTarget(x, y, z = null) {
        this.camera.target[0] = x;
        this.camera.target[1] = y;
        if (z !== null) this.camera.target[2] = z;
    }

    resize() {
        if (!this.gl) return;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    }

    // --- Camera Transform & Matrices ---
    updateCamera() {
        const cam = this.camera;
        const aspect = this.canvas.width / Math.max(1, this.canvas.height);

        // Spherical coordinates: eye relative to target
        const cosPitch = Math.cos(cam.pitch);
        const sinPitch = Math.sin(cam.pitch);
        const cosYaw = Math.cos(cam.yaw);
        const sinYaw = Math.sin(cam.yaw);

        cam.eye[0] = cam.target[0] + cam.distance * cosPitch * sinYaw;
        cam.eye[1] = cam.target[1] - cam.distance * cosPitch * cosYaw;
        cam.eye[2] = cam.target[2] + cam.distance * sinPitch;

        // Perspective Matrix
        Mat4.perspective(cam.projMat, cam.fov, aspect, 1.0, 800.0);

        // View Matrix
        Mat4.lookAt(cam.viewMat, cam.eye, cam.target, cam.up);

        // View-Projection Matrix
        Mat4.multiply(cam.viewProj, cam.projMat, cam.viewMat);

        // Inverse View-Projection Matrix for Raycasting
        Mat4.invert(cam.invViewProj, cam.viewProj);

        // Camera billboard vectors (right & up in world coordinates)
        cam.right[0] = cam.viewMat[0];
        cam.right[1] = cam.viewMat[4];
        cam.right[2] = cam.viewMat[8];

        cam.up[0] = cam.viewMat[1];
        cam.up[1] = cam.viewMat[5];
        cam.up[2] = cam.viewMat[9];

        cam.forward[0] = -cam.viewMat[2];
        cam.forward[1] = -cam.viewMat[6];
        cam.forward[2] = -cam.viewMat[10];
    }

    // --- 3D Mouse Raycasting (Screen to World) ---
    screenToWorld(screenX, screenY, world) {
        const rect = this.canvas.getBoundingClientRect();
        const mouseX = screenX - rect.left;
        const mouseY = screenY - rect.top;

        // Normalized Device Coordinates (-1 to 1)
        const ndcX = (mouseX / this.canvas.width) * 2 - 1;
        const ndcY = 1 - (mouseY / this.canvas.height) * 2;

        const nearPt = Vec3.create(ndcX, ndcY, -1.0);
        const farPt = Vec3.create(ndcX, ndcY, 1.0);

        Vec3.transformMat4(nearPt, nearPt, this.camera.invViewProj);
        Vec3.transformMat4(farPt, farPt, this.camera.invViewProj);

        const rayDir = [
            farPt[0] - nearPt[0],
            farPt[1] - nearPt[1],
            farPt[2] - nearPt[2]
        ];
        Vec3.normalize(rayDir, rayDir);

        // Fast raymarching against terrain heightfield
        let t = 0.0;
        const maxDist = 500.0;
        const stepSize = 1.0;
        let bestX = nearPt[0];
        let bestY = nearPt[1];
        let bestZ = nearPt[2];

        // If ray starts high, advance close to ground plane first
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
                    // Refine intersection with binary search
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

        // Fallback: intersect with ground plane z = 0
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

        // Build vertex grid
        // Format: x(float), y(float), z(float), nx(float), ny(float), nz(float), r(float), g(float), b(float), a(float), tileType(float)
        // Stride = 11 floats (44 bytes)
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

                // Surface Normal (computed from finite differences)
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

                // Color (r, g, b, a) from TILE_INFO
                const info = TILE_INFO[t] || { color: '#489e38' };
                const rgba = this.hexToRgba(info.color);
                // Apply slight subtle height tinting
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
        // loc 0: position (vec3)
        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, strideBytes, 0);

        // loc 1: normal (vec3)
        gl.enableVertexAttribArray(1);
        gl.vertexAttribPointer(1, 3, gl.FLOAT, false, strideBytes, 3 * 4);

        // loc 2: color (vec4)
        gl.enableVertexAttribArray(2);
        gl.vertexAttribPointer(2, 4, gl.FLOAT, false, strideBytes, 6 * 4);

        // loc 3: tileType (float)
        gl.enableVertexAttribArray(3);
        gl.vertexAttribPointer(3, 1, gl.FLOAT, false, strideBytes, 10 * 4);

        // Upload Indices only if dimension changed
        if (this.lastWorldW !== w || this.lastWorldH !== h) {
            const quadsX = w - 1;
            const quadsY = h - 1;
            const indices = new Uint32Array(quadsX * quadsY * 6);
            let idx = 0;
            for (let y = 0; y < quadsY; y++) {
                for (let x = 0; x < quadsX; x++) {
                    const row1 = y * w + x;
                    const row2 = (y + 1) * w + x;

                    // Triangle 1
                    indices[idx++] = row1;
                    indices[idx++] = row2;
                    indices[idx++] = row1 + 1;

                    // Triangle 2
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
    render(world, entityManager, disasterManager, particleSystem, activeTool, brushSize, mouseWorldPos) {
        if (!this.gl) return;
        const gl = this.gl;
        this.animTime += 0.016;

        // Resize viewport if canvas changed
        if (this.canvas.width !== window.innerWidth || this.canvas.height !== window.innerHeight) {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        }

        // Camera Update
        this.updateCamera();

        // Clear Color & Depth Buffers
        gl.clearColor(0.04, 0.04, 0.08, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        // 1. Render 3D Terrain
        if (world) {
            this.updateTerrainMesh(world);

            gl.useProgram(this.terrainProgram);
            gl.uniformMatrix4fv(gl.getUniformLocation(this.terrainProgram, 'u_viewProjection'), false, this.camera.viewProj);
            gl.uniform3fv(gl.getUniformLocation(this.terrainProgram, 'u_lightDir'), this.sunLightDir);
            gl.uniform3fv(gl.getUniformLocation(this.terrainProgram, 'u_viewPos'), this.camera.eye);
            gl.uniform1f(gl.getUniformLocation(this.terrainProgram, 'u_time'), this.animTime);

            gl.bindVertexArray(this.terrainVAO);
            gl.drawElements(gl.TRIANGLES, this.terrainIndexCount, gl.UNSIGNED_INT, 0);
            gl.bindVertexArray(null);
        }

        // 2. Render 3D Billboards (Creatures, Drop Shadows, Buildings, Particles)
        this.renderBillboards(world, entityManager, disasterManager, particleSystem, activeTool, brushSize, mouseWorldPos);
    }

    renderBillboards(world, entityManager, disasterManager, particleSystem, activeTool, brushSize, mouseWorldPos) {
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

        // A. Brush Reticle Indicator in 3D
        if (mouseWorldPos && world && world.inBounds(Math.floor(mouseWorldPos.x), Math.floor(mouseWorldPos.y))) {
            const mx = mouseWorldPos.x;
            const my = mouseWorldPos.y;
            const mz = (world.getElevation ? world.getElevation(mx, my) : 2.0) + 0.15;
            const size = Math.max(2, brushSize * 2.2);
            addBillboard(mx, my, mz, size, size, 0.22, 0.74, 0.97, 0.45);
        }

        // B. Render Entities with 3D Elevation & Drop Shadows
        if (entityManager && Array.isArray(entityManager.entities)) {
            const ents = entityManager.entities;
            for (let i = 0; i < ents.length; i++) {
                const ent = ents[i];
                if (!ent.active) continue;

                const groundZ = world ? (world.getElevation ? world.getElevation(ent.x, ent.y) : 2.0) : 2.0;
                let flightZ = 0;
                if (['dragon', 'pterodactyl', 'seraph_angel', 'thunder_bird', 'cyber_dragon', 'helicopter', 'starfighter'].includes(ent.type)) {
                    flightZ = 6.0 + Math.sin(this.animTime * 3.0 + ent.id) * 1.2;
                }

                const entZ = groundZ + flightZ;
                const entScale = Math.max(1.2, (ent.size || 2.0) * (ent.scale || 1.8));

                // Drop Shadow projected on ground below
                const shadowSize = entScale * (1.0 - Math.min(0.5, flightZ * 0.05));
                const shadowAlpha = Math.max(0.15, 0.5 - flightZ * 0.04);
                addBillboard(ent.x, ent.y, groundZ + 0.05, shadowSize * 1.2, shadowSize * 0.75, 0.0, 0.0, 0.0, shadowAlpha);

                // Entity Visual (Color coded billboard sprite)
                const col = this.hexToRgba(ent.color || '#3b82f6');
                const hitFlash = ent.hitFlash > 0 ? 0.6 : 0.0;
                addBillboard(
                    ent.x,
                    ent.y,
                    entZ + entScale * 0.5,
                    entScale,
                    entScale * 1.3,
                    col[0] + hitFlash,
                    col[1] + hitFlash,
                    col[2] + hitFlash,
                    col[3]
                );

                // Possessed Hero Reticle Beacon
                if (ent.isControlled) {
                    const beaconPulse = Math.sin(this.animTime * 8.0) * 0.3 + 1.2;
                    addBillboard(ent.x, ent.y, entZ + entScale * 1.4, 2.5 * beaconPulse, 2.5 * beaconPulse, 0.98, 0.8, 0.08, 0.9);
                }
            }
        }

        // C. Render Buildings
        if (entityManager && Array.isArray(entityManager.buildings)) {
            for (let i = 0; i < entityManager.buildings.length; i++) {
                const b = entityManager.buildings[i];
                const bz = world ? (world.getElevation ? world.getElevation(b.x, b.y) : 2.0) : 2.0;
                const bCol = this.hexToRgba(b.color || '#8d6e63');
                const bScale = Math.max(2.2, (b.width || 3) * 1.1);

                // Building Shadow
                addBillboard(b.x, b.y, bz + 0.04, bScale * 1.3, bScale * 0.8, 0, 0, 0, 0.4);
                // Building Structure
                addBillboard(b.x, b.y, bz + bScale * 0.5, bScale, bScale * 1.2, bCol[0], bCol[1], bCol[2], 0.95);
            }
        }

        // D. Render 3D Particles
        if (particleSystem && Array.isArray(particleSystem.particles)) {
            const parts = particleSystem.particles;
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
                addBillboard(p.x, p.y, pZ, pSize, pSize, pCol[0], pCol[1], pCol[2], pCol[3]);
            }
        }

        // E. Render 3D Projectiles (Arrows, Fireballs, Lasers, Magic Missiles)
        if (entityManager && Array.isArray(entityManager.projectiles)) {
            const projs = entityManager.projectiles;
            for (let i = 0; i < projs.length; i++) {
                const p = projs[i];
                const gz = world ? (world.getElevation ? world.getElevation(p.x, p.y) : 2.0) : 2.0;
                let pz = gz + 1.2;
                if (p.type === 'arrow') {
                    const progress = p.progress !== undefined ? p.progress : 0.5;
                    pz += Math.sin(progress * Math.PI) * 4.0;
                    addBillboard(p.x, p.y, pz, 0.9, 0.9, 0.9, 0.9, 0.95, 1.0);
                } else if (p.type === 'fireball') {
                    const pulse = Math.sin(this.animTime * 12.0 + i) * 0.3 + 1.2;
                    addBillboard(p.x, p.y, pz + 0.3, 1.6 * pulse, 1.6 * pulse, 0.96, 0.45, 0.05, 0.95);
                    addBillboard(p.x, p.y, pz + 0.3, 0.8, 0.8, 1.0, 0.9, 0.2, 1.0);
                } else if (p.type === 'laser' || p.type === 'blaster') {
                    addBillboard(p.x, p.y, pz, 1.2, 0.6, 0.1, 0.9, 1.0, 1.0);
                } else if (p.type === 'frost') {
                    addBillboard(p.x, p.y, pz, 1.3, 1.3, 0.6, 0.95, 1.0, 0.9);
                } else if (p.type === 'acid') {
                    addBillboard(p.x, p.y, pz, 1.2, 1.2, 0.5, 0.95, 0.1, 0.9);
                } else if (p.type === 'magic_missile') {
                    addBillboard(p.x, p.y, pz, 1.4, 1.4, 0.8, 0.4, 1.0, 0.95);
                } else {
                    addBillboard(p.x, p.y, pz, 1.0, 1.0, 1.0, 1.0, 0.2, 1.0);
                }
            }
        }

        // F. Render 3D Disasters (Meteors, Nukes, UFOs, Tornadoes, Black Holes, Forcefields)
        if (disasterManager) {
            // 1. Meteors falling from high altitude
            if (Array.isArray(disasterManager.meteors)) {
                for (let i = 0; i < disasterManager.meteors.length; i++) {
                    const m = disasterManager.meteors[i];
                    if (!m.active) continue;
                    const gz = world ? (world.getElevation ? world.getElevation(m.x, m.y) : 2.0) : 2.0;
                    const distToTarget = Math.hypot(m.targetX - m.x, m.targetY - m.y);
                    const altitude = gz + Math.max(0, distToTarget * 0.8);
                    const mSize = Math.max(3.0, (m.size || 4.0) * 1.5);
                    addBillboard(m.x, m.y, altitude, mSize, mSize, 0.98, 0.4, 0.05, 0.95);
                    addBillboard(m.x, m.y, altitude, mSize * 0.6, mSize * 0.6, 1.0, 0.9, 0.2, 1.0);
                    addBillboard(m.targetX, m.targetY, gz + 0.05, mSize * 1.5, mSize * 1.5, 0.8, 0.1, 0.0, 0.4);
                }
            }

            // 2. Nuke Missiles rocketing down
            if (Array.isArray(disasterManager.nukeMissiles)) {
                for (let i = 0; i < disasterManager.nukeMissiles.length; i++) {
                    const n = disasterManager.nukeMissiles[i];
                    if (!n.active) continue;
                    const gz = world ? (world.getElevation ? world.getElevation(n.x, n.y) : 2.0) : 2.0;
                    const alt = gz + Math.max(0, (n.altitude || (n.targetY - n.y)));
                    addBillboard(n.x, n.y, alt, 2.5, 5.0, 0.9, 0.9, 0.95, 1.0);
                    addBillboard(n.x, n.y, alt - 2.5, 2.0, 2.0, 1.0, 0.5, 0.1, 0.9);
                }
            }

            // 3. UFOs hovering high with tractor beam
            if (Array.isArray(disasterManager.ufos)) {
                for (let i = 0; i < disasterManager.ufos.length; i++) {
                    const u = disasterManager.ufos[i];
                    if (!u.active) continue;
                    const gz = world ? (world.getElevation ? world.getElevation(u.x, u.y) : 2.0) : 2.0;
                    const ufoZ = gz + 10.0 + Math.sin(this.animTime * 2.0 + i) * 1.0;
                    addBillboard(u.x, u.y, ufoZ, 6.0, 3.0, 0.3, 0.8, 0.95, 0.95);
                    addBillboard(u.x, u.y, ufoZ + 0.5, 3.0, 1.8, 0.2, 1.0, 0.5, 1.0);
                    for (let step = 0; step < 5; step++) {
                        const bz = gz + (ufoZ - gz) * (step / 5);
                        const bWidth = 2.0 + (1.0 - step / 5) * 4.0;
                        addBillboard(u.x, u.y, bz, bWidth, 1.5, 0.2, 0.9, 0.4, 0.35);
                    }
                }
            }

            // 4. Tornadoes swirling vortex column in 3D
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
                        addBillboard(t.x + sway, t.y, ringZ, ringWidth, 2.0, 0.75, 0.8, 0.85, 0.45, rot);
                    }
                }
            }

            // 5. Black Holes gravitational event horizon
            if (Array.isArray(disasterManager.blackHoles)) {
                for (let i = 0; i < disasterManager.blackHoles.length; i++) {
                    const bh = disasterManager.blackHoles[i];
                    if (!bh.active) continue;
                    const gz = world ? (world.getElevation ? world.getElevation(bh.x, bh.y) : 2.0) : 2.0;
                    const bhZ = gz + 4.0;
                    const radius = (bh.radius || 12) * 1.2;
                    addBillboard(bh.x, bh.y, bhZ, radius * 2.2, radius * 0.9, 0.9, 0.4, 0.95, 0.7, this.animTime * 3.0);
                    addBillboard(bh.x, bh.y, bhZ, radius, radius, 0.02, 0.02, 0.04, 1.0);
                }
            }

            // 6. Forcefields energy shield dome in 3D
            if (Array.isArray(disasterManager.forcefields)) {
                for (let i = 0; i < disasterManager.forcefields.length; i++) {
                    const ff = disasterManager.forcefields[i];
                    if (!ff.active) continue;
                    const gz = world ? (world.getElevation ? world.getElevation(ff.x, ff.y) : 2.0) : 2.0;
                    const ffRad = ff.radius || 20;
                    const pulse = Math.sin(this.animTime * 4.0) * 0.08 + 0.92;
                    addBillboard(ff.x, ff.y, gz + ffRad * 0.5, ffRad * 2.0 * pulse, ffRad * 1.8 * pulse, 0.2, 0.7, 1.0, 0.4);
                }
            }
        }

        // Upload & Draw Billboards
        if (instanceCount > 0) {
            gl.bindVertexArray(this.billboardVAO);
            gl.bindBuffer(gl.ARRAY_BUFFER, this.instanceVBO);
            gl.bufferSubData(gl.ARRAY_BUFFER, 0, data.subarray(0, instanceCount * 14));

            gl.uniform1i(gl.getUniformLocation(this.billboardProgram, 'u_useTexture'), 0);
            gl.drawArraysInstanced(gl.TRIANGLES, 0, 6, instanceCount);
            gl.bindVertexArray(null);
        }
    }
}

window.Renderer3D = Renderer3D;
