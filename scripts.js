// Variables
let currentCell = 'letra0';
let frases = [
    ['Ser o no ser. Esa es la cuestion.'.toUpperCase(), [14, 17]],
    ['Abandonad toda esperanza aquellos que entren en mi.'.toUpperCase(),[0, 9]],
    ['La educacion es el arma mas poderosa para cambiar el mundo.'.toUpperCase(), [3, 12]],
    ['La innovacion distingue a los lideres de los seguidores'.toUpperCase(), [14, 23]]
];
let phrase = 'H';

// SVGs que se usarán como símbolos
let svgs = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="red" class="bi bi-fuel-pump-diesel-fill" viewBox="0 0 16 16">
  <path d="M4.974 9.806h.692q.459 0 .75.19.297.191.437.568.144.377.144.941 0 .425-.083.74-.08.315-.241.528a1 1 0 0 1-.412.315 1.6 1.6 0 0 1-.595.103h-.692z"/>
  <path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1q.846-.002 1.412.336c.383.228.634.551.794.907.295.655.294 1.465.294 2.081V7.5a.5.5 0 0 1-.5.5H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1zm2 .5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5M4 9v5h1.796q.744 0 1.23-.297.49-.296.732-.86T8 11.487q0-.788-.242-1.344a1.78 1.78 0 0 0-.725-.85Q6.547 9 5.796 9z"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="yellow" class="bi bi-sign-no-left-turn-fill" viewBox="0 0 16 16">
  <path d="M2 13.292A8 8 0 0 1 13.293 2L9.195 6.099A2.5 2.5 0 0 0 8.5 6H7V4.534a.25.25 0 0 0-.41-.192L4.23 6.308a.25.25 0 0 0 0 .384l2.36 1.966.026.02zm.708.708A8 8 0 0 0 14 2.707l-3.885 3.884C10.656 7.05 11 7.735 11 8.5V11h-1V8.5c0-.489-.234-.923-.596-1.197l-6.696 6.696Z"/>
  <path d="M8.293 7 7 8.293V7z"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-sign-no-left-turn" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m3.416 5.29 5.988-5.987c.362.274.596.708.596 1.197V11h1V8.5c0-.765-.344-1.45-.885-1.908l3.176-3.176a7 7 0 0 1-9.874 9.874Zm-.707-.706a7 7 0 0 1 9.874-9.874L9.196 6.097A2.5 2.5 0 0 0 8.5 6H7V4.534a.25.25 0 0 0-.41-.192L4.23 6.308a.25.25 0 0 0 0 .384l2.36 1.966.026.02zM8.293 7 7 8.293V7z"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-sign-intersection" viewBox="0 0 16 16">
  <path d="M7.25 4v3.25H4v1.5h3.25V12h1.5V8.75H12v-1.5H8.75V4z"/>
  <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zm-1.4.7a.495.495 0 0 1 .7 0l6.516 6.515a.495.495 0 0 1 0 .7L8.35 14.866a.495.495 0 0 1-.7 0L1.134 8.35a.495.495 0 0 1 0-.7L7.65 1.134Z"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-sign-do-not-enter" viewBox="0 0 16 16">
  <path d="M3.584 6V4h.69c.596 0 .886.355.886.998S4.867 6 4.274 6zm.653-1.72h-.32v1.44h.32c.396 0 .582-.239.582-.718 0-.481-.188-.722-.582-.722m2.729.585v.272c0 .566-.318.903-.83.903-.513 0-.833-.337-.833-.903v-.272c0-.569.32-.904.832-.904.513 0 .83.337.83.904Zm-.337.274v-.277c0-.413-.211-.617-.494-.617-.285 0-.495.204-.495.617v.277c0 .414.21.618.495.618.283 0 .494-.204.494-.618m1.358-.579V6h-.319V4h.293l.933 1.436h.015V4h.319v2h-.291L8 4.56zm3.142.305v.272c0 .566-.318.903-.83.903-.513 0-.833-.337-.833-.903v-.272c0-.569.32-.904.832-.904.513 0 .83.337.83.904Zm-.337.274v-.277c0-.413-.211-.617-.494-.617-.285 0-.495.204-.495.617v.277c0 .414.21.618.495.618.283 0 .494-.204.494-.618m1.236-.854V6h-.333V4.285h-.584V4h1.503v.285zM4.496 11.72h.917V12H4.165v-2h1.248v.28h-.917v.57h.862v.268h-.862zm1.489-1.16V12h-.32v-2h.294l.933 1.436h.014v-1.435h.32V12h-.292l-.936-1.44zm2.279-.275V12H7.93v-1.715h-.584V10H8.85v.284zM9.3 11.72h.917V12H8.97v-2h1.248v.28H9.3v.57h.863v.268H9.3zM10.47 10h.765c.42 0 .674.244.674.616a.575.575 0 0 1-.368.56l.404.824h-.373l-.36-.769h-.414V12h-.328zm.328.273v.694h.381c.245 0 .387-.115.387-.34 0-.228-.147-.354-.378-.354zM3.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m0-1A7 7 0 1 1 8 1a7 7 0 0 1 0 14"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-send-arrow-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15.854.146a.5.5 0 0 1 .11.54l-2.8 7a.5.5 0 1 1-.928-.372l1.895-4.738-7.494 7.494 1.376 2.162a.5.5 0 1 1-.844.537l-1.531-2.407L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM5.93 9.363l7.494-7.494L1.591 6.602z"/>
  <path fill-rule="evenodd" d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354a.5.5 0 0 0-.722.016l-1.149 1.25a.5.5 0 1 0 .737.676l.28-.305V14a.5.5 0 0 0 1 0v-1.793l.396.397a.5.5 0 0 0 .708-.708z"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="blue" class="bi bi-send-arrow-down-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15.854.146a.5.5 0 0 1 .11.54L13.026 8.03A4.5 4.5 0 0 0 8 12.5c0 .5 0 1.5-.773.36l-1.59-2.498L.644 7.184l-.002-.001-.41-.261a.5.5 0 0 1 .083-.886l.452-.18.001-.001L15.314.035a.5.5 0 0 1 .54.111M6.637 10.07l7.494-7.494.471-1.178-1.178.471L5.93 9.363l.338.215a.5.5 0 0 1 .154.154z"/>
  <path fill-rule="evenodd" d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-1.646a.5.5 0 0 1-.722-.016l-1.149-1.25a.5.5 0 1 1 .737-.676l.28.305V11a.5.5 0 0 1 1 0v1.793l.396-.397a.5.5 0 0 1 .708.708z"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-search-heart" viewBox="0 0 16 16">
  <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"/>
  <path d="M13 6.5a6.47 6.47 0 0 1-1.258 3.844q.06.044.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="red" class="bi bi-postage-heart-fill" viewBox="0 0 16 16">
  <path d="M4.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zM8 11C2.175 7.236 6.336 4.31 8 5.982 9.664 4.309 13.825 7.236 8 11"/>
  <path d="M4.5 0a1 1 0 0 1-2 0H1v1a1 1 0 0 1 0 2v1a1 1 0 0 1 0 2v1a1 1 0 0 1 0 2v1a1 1 0 1 1 0 2v1a1 1 0 1 1 0 2v1h1.5a1 1 0 1 1 2 0h1a1 1 0 1 1 2 0h1a1 1 0 1 1 2 0h1a1 1 0 1 1 2 0H15v-1a1 1 0 1 1 0-2v-1a1 1 0 1 1 0-2V9a1 1 0 1 1 0-2V6a1 1 0 1 1 0-2V3a1 1 0 1 1 0-2V0h-1.5a1 1 0 1 1-2 0h-1a1 1 0 1 1-2 0h-1a1 1 0 0 1-2 0zM4 14a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1z"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-hearts" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.931.481c1.627-1.671 5.692 1.254 0 5.015-5.692-3.76-1.626-6.686 0-5.015m6.84 1.794c1.084-1.114 3.795.836 0 3.343-3.795-2.507-1.084-4.457 0-3.343M7.84 7.642c2.71-2.786 9.486 2.09 0 8.358-9.487-6.268-2.71-11.144 0-8.358"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-heart-pulse-fill" viewBox="0 0 16 16">
  <path d="M1.475 9C2.702 10.84 4.779 12.871 8 15c3.221-2.129 5.298-4.16 6.525-6H12a.5.5 0 0 1-.464-.314l-1.457-3.642-1.598 5.593a.5.5 0 0 1-.945.049L5.889 6.568l-1.473 2.21A.5.5 0 0 1 4 9z"/>
  <path d="M.88 8C-2.427 1.68 4.41-2 7.823 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C11.59-2 18.426 1.68 15.12 8h-2.783l-1.874-4.686a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8z"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-envelope-arrow-down-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zm.192 8.159 6.57-4.027L8 9.586l1.239-.757.367.225A4.49 4.49 0 0 0 8 12.5c0 .526.09 1.03.256 1.5H2a2 2 0 0 1-1.808-1.144M16 4.697v4.974A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-1.965.45l-.338-.207z"/>
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-1.646a.5.5 0 0 1-.722-.016l-1.149-1.25a.5.5 0 1 1 .737-.676l.28.305V11a.5.5 0 0 1 1 0v1.793l.396-.397a.5.5 0 0 1 .708.708z"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-envelope-arrow-down" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5a.5.5 0 0 1-1 0V5.383l-7 4.2-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-1.99zm1 7.105 4.708-2.897L1 5.383zM1 4v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1"/>
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-1.646a.5.5 0 0 1-.722-.016l-1.149-1.25a.5.5 0 1 1 .737-.676l.28.305V11a.5.5 0 0 1 1 0v1.793l.396-.397a.5.5 0 0 1 .708.708z"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-emoji-kiss" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12.493 13.368a7 7 0 1 1 2.489-4.858c.344.033.68.147.975.328a8 8 0 1 0-2.654 5.152 9 9 0 0 1-.81-.622m-3.731-3.22a13 13 0 0 0-1.107.318.5.5 0 1 1-.31-.95c.38-.125.802-.254 1.192-.343.37-.086.78-.153 1.103-.108.16.022.394.085.561.286.188.226.187.497.131.705a1.9 1.9 0 0 1-.31.593q-.115.16-.275.343.16.186.276.347c.142.197.256.397.31.595.055.208.056.479-.132.706-.168.2-.404.262-.563.284-.323.043-.733-.027-1.102-.113a15 15 0 0 1-1.191-.345.5.5 0 1 1 .31-.95c.371.12.761.24 1.109.321q.264.062.446.084a6 6 0 0 0-.502-.584.5.5 0 0 1 .002-.695 5.5 5.5 0 0 0 .5-.577 5 5 0 0 0-.448.082Zm.766-.087-.003-.001-.003-.001zm.002 1.867-.006.001zM6 8c.552 0 1-.672 1-1.5S6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8m2.757-.563a.5.5 0 0 0 .68-.194.93.93 0 0 1 .813-.493c.339 0 .645.19.813.493a.5.5 0 0 0 .874-.486A1.93 1.93 0 0 0 10.25 5.75c-.73 0-1.356.412-1.687 1.007a.5.5 0 0 0 .194.68M14 9.828c1.11-1.14 3.884.856 0 3.422-3.884-2.566-1.11-4.562 0-3.421Z"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-emoji-heart-eyes" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.5 4.5 0 0 1 7.965 13a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242s1.46-.118 2.152-.242a27 27 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434m6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-chat-heart" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.965 12.695a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2m-.8 3.108.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125M8 5.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-balloon-heart" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063q.068.062.132.129.065-.067.132-.129c3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3 3 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-bag-heart-fill" viewBox="0 0 16 16">
  <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="green" class="bi bi-arrow-through-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l3.103-3.104a.5.5 0 1 1 .708.708L4.5 12.207V14a.5.5 0 0 1-.146.354zM16 3.5a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182A24 24 0 0 1 5.8 12.323L8.31 9.81a1.5 1.5 0 0 0-2.122-2.122L3.657 10.22a9 9 0 0 1-1.039-1.57c-.798-1.576-.775-2.997-.213-4.093C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5z"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-arrow-through-heart" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l.53-.53c-.771-.802-1.328-1.58-1.704-2.32-.798-1.575-.775-2.996-.213-4.092C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182a22 22 0 0 1-2.685-2.062l-.539.54V14a.5.5 0 0 1-.146.354zm2.893-4.894A20.4 20.4 0 0 0 8 12.71c2.456-1.666 3.827-3.207 4.489-4.512.679-1.34.607-2.42.215-3.185-.817-1.595-3.087-2.054-4.346-.761L8 4.62l-.358-.368c-1.259-1.293-3.53-.834-4.346.761-.392.766-.464 1.845.215 3.185.323.636.815 1.33 1.519 2.065l1.866-1.867a.5.5 0 1 1 .708.708z"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-arrows-move" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10M.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707m0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707m-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="orange" class="bi bi-airplane-engines-fill" viewBox="0 0 16 16">
  <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.35 4.35 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-airplane-engines" viewBox="0 0 16 16">
  <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.35 4.35 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0M7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1s.458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7z"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="red" class="bi bi-0-circle-fill" viewBox="0 0 16 16">
  <path d="M8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895"/>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8.012 4.158c1.858 0 2.96-1.582 2.96-3.99V7.84c0-2.426-1.079-3.996-2.936-3.996-1.864 0-2.965 1.588-2.965 3.996v.328c0 2.42 1.09 3.99 2.941 3.99"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-0-circle" viewBox="0 0 16 16">
  <path d="M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99M8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895"/>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8"/>
</svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-emoji-sunglasses" viewBox="0 0 16 16">
  <path d="M4.968 9.75a.5.5 0 1 0-.866.5A4.5 4.5 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.5 3.5 0 0 1 8 11.5a3.5 3.5 0 0 1-3.032-1.75M7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A3 3 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.2 4.2 0 0 0 8 5c-.35 0-.69.04-1 .116"/>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0"/>
</svg>`
];
let notLetterSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="transparent" class="bi bi-dash-circle-dotted" viewBox="0 0 16 16">
  <path d="M8 0q-.264 0-.523.017l.064.998a7 7 0 0 1 .918 0l.064-.998A8 8 0 0 0 8 0M6.44.152q-.52.104-1.012.27l.321.948q.43-.147.884-.237L6.44.153zm4.132.271a8 8 0 0 0-1.011-.27l-.194.98q.453.09.884.237zm1.873.925a8 8 0 0 0-.906-.524l-.443.896q.413.205.793.459zM4.46.824q-.471.233-.905.524l.556.83a7 7 0 0 1 .793-.458zM2.725 1.985q-.394.346-.74.74l.752.66q.303-.345.648-.648zm11.29.74a8 8 0 0 0-.74-.74l-.66.752q.346.303.648.648zm1.161 1.735a8 8 0 0 0-.524-.905l-.83.556q.254.38.458.793l.896-.443zM1.348 3.555q-.292.433-.524.906l.896.443q.205-.413.459-.793zM.423 5.428a8 8 0 0 0-.27 1.011l.98.194q.09-.453.237-.884zM15.848 6.44a8 8 0 0 0-.27-1.012l-.948.321q.147.43.237.884zM.017 7.477a8 8 0 0 0 0 1.046l.998-.064a7 7 0 0 1 0-.918zM16 8a8 8 0 0 0-.017-.523l-.998.064a7 7 0 0 1 0 .918l.998.064A8 8 0 0 0 16 8M.152 9.56q.104.52.27 1.012l.948-.321a7 7 0 0 1-.237-.884l-.98.194zm15.425 1.012q.168-.493.27-1.011l-.98-.194q-.09.453-.237.884zM.824 11.54a8 8 0 0 0 .524.905l.83-.556a7 7 0 0 1-.458-.793zm13.828.905q.292-.434.524-.906l-.896-.443q-.205.413-.459.793zm-12.667.83q.346.394.74.74l.66-.752a7 7 0 0 1-.648-.648zm11.29.74q.394-.346.74-.74l-.752-.66q-.302.346-.648.648zm-1.735 1.161q.471-.233.905-.524l-.556-.83a7 7 0 0 1-.793.458zm-7.985-.524q.434.292.906.524l.443-.896a7 7 0 0 1-.793-.459zm1.873.925q.493.168 1.011.27l.194-.98a7 7 0 0 1-.884-.237zm4.132.271a8 8 0 0 0 1.012-.27l-.321-.948a7 7 0 0 1-.884.237l.194.98zm-2.083.135a8 8 0 0 0 1.046 0l-.064-.998a7 7 0 0 1-.918 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
</svg>
`

let abecedario = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';

/* FUNCIONES */

/* 
Funciones para empezar un juego nuevo 
*/
function shuffleArray() {
    let currentIndex = svgs.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [svgs[currentIndex], svgs[randomIndex]] = [
        svgs[randomIndex], svgs[currentIndex]];
    }
  }

function assignSymbol() {
    // Assigns a symbol to each letter
    let symbolAssignment = [];

    for (let i = 0; i < abecedario.length; i++) {
        symbolAssignment.push([abecedario[i], svgs[i]])
    }

    return symbolAssignment;
}

function chosePhrase() {
    // Elige una sub-lista de las frases de la lista 'frases'. OJO: elige la sub-lista, no la frase. Al momento de escribir el código html, hay que diferenciarlos.
    let randomChoice = Math.floor(Math.random() * frases.length);
    phrase = frases[randomChoice];
}

function writeHTML(symbolAssignment) {
    /* Writes the HTML code inside the main Div.*/

    // Si la palabra mostrada es la primera
    if (phrase[1][0] === 0) {
        for (let i = 0; i < phrase[1][1]; i++) {
            writtingHTML(0, i, symbolAssignment)
        }
        for (let i = phrase[1][1]; i < phrase[0].length; i++) {
            writtingHTML(1, i, symbolAssignment)
        }

        document.getElementById(`letra${10}`).classList.add('letrafocus');
    } 
    
    else {
        for (let i = 0; i < phrase[1][0]; i++) {
            writtingHTML(1, i, symbolAssignment)
        }

        for (let i = phrase[1][0]; i < phrase[1][1]; i++) {
            writtingHTML(0, i, symbolAssignment)
        }

        for (let i = phrase[1][1]; i < phrase[0].length; i++) {
            writtingHTML(1, i, symbolAssignment)
        }

        document.getElementById(`letra0`).classList.add('letrafocus');
    }

}

function writtingHTML(firstIndex, i, symbolAssignment) {
    let mainDiv = document.getElementById('main');

    if (firstIndex === 0) {
        let letra = phrase[0][i];
        let index = abecedario.indexOf(letra);
        if (abecedario.includes(phrase[0][i])) {
            mainDiv.innerHTML += `
             <div class="letter_container">
            <div id="letra${i}" class="contenedor"  style="color: #000;">${letra}</div>
            <div id="contenedor${i}">${symbolAssignment[index][1]}</div>
            </div>
            `
        }
    } else {
        let letra = phrase[0][i];
        let index = abecedario.indexOf(letra);
        if (abecedario.includes(phrase[0][i])) {
            mainDiv.innerHTML += `
             <div class="letter_container" onclick="changeCurrentCell('letra${i}')">
            <div id="letra${i}" class="contenedor"></div>
            <div id="contenedor${i}">${symbolAssignment[index][1]}</div>
            </div>
            `
        } else {
            mainDiv.innerHTML += `
             <div class="letter_container">
            <div id="letra${i}" class="contenedor">${letra}</div>
            <div id="contenedor${i}">${notLetterSVG}</div>
            </div>
            `
        }
    }
}


/* 
Funciones que modifican el juego 
*/
function changeCurrentCell(newCell) {
  /* Modifica la celda activa que contiene la clase letrafocus, la cual le da el borde inferior. Además, cambia la celda donde se escribiá la letra presionada por el usuario.
  
  Parámetro:
      - newCell: la nueva casilla*/
  currentCell = newCell;
  document.querySelector('.imtiredofthinking').innerHTML = `
  <div onclick="changeCurrentCell('${newCell}')" class="windowLabel"></div>
  `;

  let actual = document.querySelector('.letrafocus');
  actual.classList.remove('letrafocus');

  let siguiente = document.getElementById(newCell);
  siguiente.classList.add('letrafocus');
  
}

addEventListener('keydown', (event) => {
  /* Al presionar una tecla (SÓLO si es una letra), se escribirá en la casilla activa. */
  
  let letter = event.key.toUpperCase();
  if ('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.includes(letter)) {
      document.getElementById(`${currentCell}`).innerHTML = letter;
  } else if (event.key === 'Backspace') {
      document.getElementById(`${currentCell}`).innerHTML = ''
  }
})

addEventListener('keyup', autocomplete)

function autocomplete() {
/* 
Autocompleta las letras presionadas por el usuario, en caso de tener la opci+on autocompletar activa.
*/

let index = '';   // indice de la casilla activa
if (currentCell[currentCell.length-2] !== 'a') {
  index = currentCell[currentCell.length-2]
}
index += currentCell[currentCell.length-1]

let letter = document.getElementById(`letra${index}`).innerHTML;
let svg = document.getElementById(`contenedor${index}`).innerHTML;

// Si la opción autocompletar esta activa
let autocomplete = document.getElementById('autocomplete');
if (autocomplete.checked) {
  // Caso en el que la palabra mostrada por el juego es la primera
  if (phrase[1][0] === 0) {
    for (let i = phrase[1][1]; i < phrase[0].length; i++) {
      let newsvg = document.getElementById(`contenedor${i}`).innerHTML;
      if (newsvg === svg) {
        document.getElementById(`letra${i}`).innerHTML = letter
      }
    }
  } 
  // Caso en que la palabra mostrada por el juego NO es la primera
  else {
    for (let i = 0; i < phrase[1][0]; i++) {
      let newsvg = document.getElementById(`contenedor${i}`).innerHTML;
      if (newsvg === svg) {
        document.getElementById(`letra${i}`).innerHTML = letter
      }
    }
    for (let i = phrase[1][1]; i < phrase[0].length; i++) {
      let newsvg = document.getElementById(`contenedor${i}`).innerHTML;
      if (newsvg === svg) {
        document.getElementById(`letra${i}`).innerHTML = letter
      }
    }
  }
}
}

function autocompleteFirstWord() {
// Autocompleta las letras de la palabra dada por el programa
  for (let i = phrase[1][0]; i < phrase[1][1]; i++) {
    let letter = document.getElementById(`letra${i}`).innerHTML;
    let svg = document.getElementById(`contenedor${i}`).innerHTML;

    for (let j = 0; j < phrase[0].length; j++) {
      let newsvg = document.getElementById(`contenedor${j}`).innerHTML;

      if (newsvg === svg) {
        document.getElementById(`letra${j}`).innerHTML = letter
      }
    }
  }

  if (document.getElementById('autocomplete').checked) {
    for (let i = 0; i < phrase[0].length; i++) {
      let letter = document.getElementById(`letra${i}`).innerHTML;
      let svg = document.getElementById(`contenedor${i}`).innerHTML;
  
      for (let j = 0; j < phrase[0].length; j++) {
        let newsvg = document.getElementById(`contenedor${j}`).innerHTML;
  
        if (newsvg === svg) {
          document.getElementById(`letra${j}`).innerHTML = letter
        }
      }
    }
  }
}


// Error Checker
setInterval(function () {
  // Verifica si hay letras mal anotadas.
        let errorChecking = document.getElementById('checkerrors');
        if (errorChecking.checked === true) {
          for (let i = 0; i < phrase[0].length; i++) {
            let current = document.getElementById(`letra${i}`);
            // Si la letra es incorrecta, agrega la calse 'error'
            if (current.innerHTML !== phrase[0][i]) {
              current.classList.add('error')
            } else {
              if (current.classList.contains('error')) {
                current.classList.remove('error')
              }
            }
          }
        } else {
          for (let i = 0; i < phrase[0].length; i++) {
            let current = document.getElementById(`letra${i}`);
            // Si tiene la clase 'error', la elimina
            if (current.classList.contains('error')) {
              current.classList.remove('error')
            }
          }
        }
    }
    , 100)

// Check winner
setInterval(function() {
  // Verifica si ganó
  for (let i = 0; i < phrase[0].length; i++) {
    /* Para cada letra, si alguna no coincide, no hago nada. Si terminado el ciclo, todas coinciden, entonces escribo el mensaje de gano. */
    let current = document.getElementById(`letra${i}`);
    if (current.innerHTML !== phrase[0][i]) {
      return
    }
  }

  document.querySelector('.resultado').innerHTML = 'Felicidades. Ha ganado!';
}, 100)

function newGame() {
  document.getElementById(`autocomplete`).checked = false;
  document.getElementById(`checkerrors`).checked = false;
  document.querySelector('.resultado').innerHTML = '';
  document.getElementById('main').innerHTML = ''

  shuffleArray();
  let symbolAssignment = assignSymbol();
  chosePhrase();
  writeHTML(symbolAssignment);
  changeCurrentCell('letra0');
  if (phrase[1][0] === 0) {
    changeCurrentCell(`letra${phrase[1][1] + 1}`)
  }
}
