(function(App, drinkData) {

  window.config = {
    "resources": drinkData,
    "state": {
      "drinkType": null,
      "alcoholic": null,
      "nonalcoholic": null,
      "clean": null
    },
    "cleanWordsMap": [{
      "bad": "fucking",
      "clean": "stinking"
    }, {
      "bad": "fuckin\'",
      "clean": "stinkin\'"
    }, {
      "bad": "fuck",
      "clean": "heck"
    }, {
      "bad": "Fuck",
      "clean": "Heck"
    }, {
      "bad": " ass",
      "clean": " butt"
    }],
    "selectors": {
      "aboutClose": document.getElementById('js-about-close'),
      "aboutOpen": document.getElementById('js-about-open'),
      "aboutOverlay": document.getElementById('js-about-overlay'),
      "promptContainer": document.getElementById('js-template-prompt'),
      "drinkTypeTrigger": document.getElementById('js-trigger-drinktype'),
      "newContentTrigger": document.getElementById('js-trigger-moar-drinks'),
      "drinknameContainer": document.getElementById('js-template-drinkname')
    }
  };

  var initializeState = function() {
    var subdomain = window.location.hostname.replace(/www\./).match(/(\w*)/g)[0];
    config.state.alcoholic = true;
    config.state.nonalcoholic = false;
    switch (subdomain) {
      case 'simple':
        config.state.drinkType = 'simple';
        config.state.clean = false;
        break;
      case 'clean':
        config.state.drinkType = 'alcoholic';
        config.state.clean = true;
        break;
      default:
        config.state.drinkType = 'alcoholic';
        config.state.clean = false;
    }
  };

  var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  var cleanUpText = function(text) {
    var cleanText = text;
    config.cleanWordsMap.forEach(function(wordPairs) {
      var pattern = new RegExp(wordPairs.bad, "g");
      cleanText = cleanText.replace(pattern, wordPairs.clean);
    });
    return cleanText;
  };

  var cleanUpLanguage = function() {
    if (config.state.clean) {
      document.documentElement.innerHTML = cleanUpText(document.documentElement.innerHTML);
    }
  };

  var getRandomPrompt = function() {
    var randomInt = getRandomInt(0, config.resources.prompts.length);
    var prompt = config.resources.prompts[randomInt];
    if (config.state.clean) {
      prompt = cleanUpText(prompt);
    }
    return prompt;
  };

  var getRandomDrinkObject = function() {
    var drinkType = config.state.alcoholic === true ? config.state.drinkType : 'nonalcoholic';
    var randomInt = getRandomInt(0, config.resources.drinks[drinkType].length);
    return config.resources.drinks[drinkType][randomInt];
  };

  var loadNewContent = function() {
    var drink = getRandomDrinkObject();
    config.selectors.promptContainer.innerHTML = getRandomPrompt() + '...';
    config.selectors.drinknameContainer.innerHTML = '<a href="' + drink.link + '">' + drink.name + '</a>';
  };

  var updateDrinkTypeTrigger = function() {
    if (config.state.alcoholic) {
      config.selectors.drinkTypeTrigger.innerHTML = 'I don\'t wanna fucking drink alcohol.';
    } else if (config.state.nonalcoholic) {
      config.selectors.drinkTypeTrigger.innerHTML = 'Nvm, turns out I do wanna drink alcohol.';
    }
  };

  var bindUIActions = function() {
    config.selectors.newContentTrigger.addEventListener('click', function() {
      loadNewContent();
    });
    config.selectors.drinkTypeTrigger.addEventListener('click', function() {
      config.state.alcoholic = config.state.alcoholic === true ? false : true;
      config.state.nonalcoholic = config.state.nonalcoholic === true ? false : true;
      updateDrinkTypeTrigger();
      loadNewContent();
      return false;
    });
    config.selectors.aboutOpen.addEventListener('click', function() {
      config.selectors.aboutOverlay.style.display = 'block';
      return false;
    });
    config.selectors.aboutClose.addEventListener('click', function() {
      config.selectors.aboutOverlay.style.display = 'none';
    });
  };

  App.init = function() {
    initializeState();
    loadNewContent();
    cleanUpLanguage();
    bindUIActions();
  };

}(window.App = window.App || {}, drinkData));
