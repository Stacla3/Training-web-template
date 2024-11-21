const containSuggest = document.querySelector(".suggestion-content");

const addSuggestionContents = function (num) {
  for (let i = 0; i < num; i++) {
    const html = `
          <div class="suggestion">
              <i class="fa-solid fa-calendar icon" style="color: #16a34a"></i>
              <h3 class="topic-suggestion">Reformidans eis</h3>
              <p class="detail-sugggestion">
              Facer nostro causae ei sed. Vix ex quidam detraxit, vis ad nostro laoreet.
              </p>
          </div>`;
    containSuggest.insertAdjacentHTML("beforeend", html);
  }
};

addSuggestionContents(5);
