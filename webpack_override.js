	(function webpack_inject(){


	window.isset = function(v) {
		return typeof v !== "undefined" && v !== null && v !== "" ? true : false;
	}
	
	window.obfuscate = {
		"mainModule": "Jt",
		"init": "o",
		"free": "n",
		"update": "c",
		"render": "qt",
		"sendMessage": "Yt",
		"processGameUpdate": "Nt",
		"EmoteManager": "kt",
		"camera": "ie",
		"targetZoom": "k",
		"activePlayer": "Dt",
		"input": "qe",
		"keyPressed": "ue",
		"mousePressed": "ge",
		"mouseDown": "we",
		"smokeBarn": false,
		"smokePool": "e",
		"map": "et",
		"obstaclePool": "de",
		"buildingPool": "Tt",
		"pool": "Ae",
		"playerBarn": "at",
		"playerPool": "Se",
		"playerInfo": "ta",
		"activeId": "Et",
		"objectCreator": "Ct",
		"netData": "re",
		"pieTimer": "vt",
		// "lootBarn": "wt",
		// "closestLoot": "Qt",
		// "lootPool": "Mt",
		"localData": "oe",
		"cheatVersion": "0.30.0"
	};

	var checkVersion = function () {
		var link = "https://raw.githubusercontent.com/Kalaborative/survivio-plus/master/manifest.json";
		fetch(link)
			.then( response => response.json())
			.then( (jsonData) => {
				if( isset(jsonData.version) && jsonData.version !== obfuscate.cheatVersion) {
					alert("Please update your extension for the best results!");
				}
			});
	}
	checkVersion();
	// window.freestar.newAdSlots = function(slots) {
	// 	return slots;
	// }

	// window.freestar.deleteAdSlots = function(slots) {
	// 	return slots;
	// }
	
	
	window.webpackJsonp([0], {
        "webpack_inject": function (wrapper, exports, getModule) {

            var mainModule = getModule("9b5f96fd")[obfuscate.mainModule];
            // console.log(mainModule);
						
			// init
			var gameInitBase = mainModule.prototype[obfuscate.init];
			mainModule.prototype[obfuscate.init] = function(){
				gameInitBase.apply(this, arguments);
				window.gameFunctions.gameInit.call(this);
			};
			
			// free
			var gameFreeBase = mainModule.prototype[obfuscate.free];
			// console.log(gameFreeBase);
			mainModule.prototype[obfuscate.free] = function(){
				gameFreeBase.apply(this, arguments);
				window.gameFunctions.gameFree.call(this);
			};
			
			// update and override
			var gameUpdateBase = mainModule.prototype[obfuscate.update];
			mainModule.prototype[obfuscate.update] = function(){
				if(!this.override)
					window.gameFunctions.gameOverride.call(this);
				gameUpdateBase.apply(this, arguments);
				window.gameFunctions.gameUpdate.call(this);
			};
			
			// render
			var gameRenderBase = mainModule.prototype[obfuscate.render];
			mainModule.prototype[obfuscate.render] = function(){
				gameRenderBase.apply(this, arguments);
				window.gameFunctions.gameRender.call(this);
			};
			
			// sendMessage
			var gameSendMessageBase = mainModule.prototype[obfuscate.sendMessage];
			mainModule.prototype[obfuscate.sendMessage] = function(){
				gameSendMessageBase.apply(this, arguments);
				window.gameFunctions.gameSendMessage.apply(this, arguments);
			};
			
			// processGameUpdate
			var gameSrocessGameUpdateBase = mainModule.prototype[obfuscate.processGameUpdate];
			mainModule.prototype[obfuscate.processGameUpdate] = function(){
				gameSrocessGameUpdateBase.apply(this, arguments);
				window.gameFunctions.gameSrocessGameUpdate.apply(this, arguments);
			};
			
			// PING
			var emoteModule = getModule("e5d16b4d");
			// console.log(emoteModule);

			// var someModule = getModule("c99e6613");
			// console.log(someModule);

			// var anotherModule = getModule('61fc98e9');
			// console.log(anotherModule.prototype.connect);

			
			// override
			var emoteManagerUpdateBase = emoteModule[obfuscate.EmoteManager].prototype[obfuscate.update]; //emoteModule.EmoteManager.prototype.update
			// console.log(emoteManagerUpdateBase);
			emoteModule[obfuscate.EmoteManager].prototype[obfuscate.update] = function(){ 
				if(!this.override)
					window.gameFunctions.pingOverride.call(this);
				
				emoteManagerUpdateBase.apply(this, arguments);
			};
			
			// DATA
			window.gameVars.Game.GameData = getModule("989ad62a");

			window.gameVars.Game.model = getModule("ceee80d9");
		
			window.setInterval(function() { window.gameVars.Game.updateTeamTab = true; }, 1000);
        }
    }, ["webpack_inject"]);

})();
