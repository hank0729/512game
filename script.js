const storyData = {
    "characters": {
        "warrior": {
            "name": "勇士",
            "avatar": "warrior.png"
        },
        "mage": {
            "name": "法師",
            "avatar": "mage.png"
        },
        "archer": {
            "name": "弓箭手",
            "avatar": "archer.png"
        }
    },
    "start": {
        "warrior": {
            "text": "你是勇敢的勇士，正在穿越一片神秘的森林。突然，你在森林深處發現了一條岔路。",
            "choices": {
                "leftPath": "走向左邊的岔路",
                "rightPath": "走向右邊的岔路"
            }
        },
        "mage": {
            "text": "你是智慧的法師，正在穿越一片神秘的森林。突然，你在森林深處發現了一條岔路。",
            "choices": {
                "leftPath": "走向左邊的岔路",
                "rightPath": "走向右邊的岔路"
            }
        },
        "archer": {
            "text": "你是敏捷的弓箭手，正在穿越一片神秘的森林。突然，你在森林深處發現了一條岔路。",
            "choices": {
                "leftPath": "走向左邊的岔路",
                "rightPath": "走向右邊的岔路"
            }
        }
    },
    "leftPath": {
        "text": "你走向左邊的岔路，發現了一條通往一座古老廢墟的小徑。",
        "choices": {
            "exploreRuins": "探索廢墟",
            "leaveRuins": "離開廢墟"
        }
    },
    "rightPath": {
        "text": "你選擇右邊的岔路，來到了一片寧靜的湖泊邊。",
        "choices": {
            "restAtLake": "在湖邊休息",
            "exploreLake": "環繞湖泊探索"
        }
    },
    "exploreRuins": {
        "text": "你進入廢墟，發現裡面有許多古老的文物和一個神秘的寶箱。",
        "choices": {
            "openChest": "打開寶箱",
            "ignoreChest": "不打開寶箱"
        },
        "achievement": "勇敢的探索者"
    },
    "leaveRuins": {
        "text": "你決定離開廢墟，繼續沿著小徑前行。你遇到了一隻受傷的動物，決定幫助它。",
        "choices": {
            "helpAnimal": "幫助受傷的動物",
            "ignoreAnimal": "忽略動物"
        }
    },
    "restAtLake": {
        "text": "你在湖邊休息，忽然發現湖中有一條巨大的水怪。",
        "choices": {
            "fightMonster": "與水怪戰鬥",
            "avoidMonster": "躲避水怪"
        },
        "achievement": "湖邊的守護者"
    },
    "exploreLake": {
        "text": "你決定環繞湖泊進行探索，發現湖的另一邊有一個隱蔽的洞穴。",
        "choices": {
            "enterCave": "進入洞穴",
            "ignoreCave": "不進入洞穴"
        }
    },
    "openChest": {
        "text": "你小心翼翼地打開寶箱，發現裡面藏有一把閃閃發光的魔法劍。這把劍不僅鋒利無比，還能釋放出強大的魔法攻擊。你決定帶上這把劍，繼續你的冒險之旅。",
        "choices": {
            "restart": "重新開始"
        },
        "achievement": "寶箱獵人"
    },
    "ignoreChest": {
        "text": "你沒有打開寶箱，而是繼續探索廢墟。在一間隱藏的房間裡，你發現了一條通往地下的地道。地道通向一個神秘的地下世界，裡面藏有更多的危險和寶藏。",
        "choices": {
            "exploreTunnel": "探索地道",
            "leaveTunnel": "離開地道"
        }
    },
    "helpAnimal": {
        "text": "你發現一隻受傷的小鹿，決定幫助它。小鹿感激地帶領你找到了一處秘密的藥草園，裡面有許多神奇的藥草，可以用來治癒傷口和恢復體力。",
        "choices": {
            "restart": "重新開始",
            "leaveHerbs": "離開藥草園"
        },
        "achievement": "自然的朋友"
    },
    "ignoreAnimal": {
        "text": "你決定忽略動物，繼續前行。突然，你聽到背後傳來奇怪的聲音，發現那隻動物變成了一隻兇猛的怪物，朝你撲來。",
        "choices": {
            "fightBeast": "與怪物戰鬥",
            "runAway": "逃跑"
        }
    },
    "fightMonster": {
        "text": "你發現湖中有一條巨大的水怪，決定與它戰鬥。經過一番激烈的戰鬥，你成功地擊敗了水怪，並從它的身體裡取出了一顆閃閃發光的魔法珍珠。這顆珍珠擁有強大的力量，可以在危急時刻保護你。",
        "choices": {
            "restart": "重新開始"
        }
    },
    "avoidMonster": {
        "text": "你悄悄離開湖邊，避免與水怪發生衝突。你進入森林深處，發現了一條通往未知區域的小徑。",
        "choices": {
            "exploreForest": "探索森林",
            "leaveForest": "離開森林"
        }
    },
    "enterCave": {
        "text": "你進入洞穴，發現洞穴深處藏有大量的寶藏和一個神秘的護符。護符擁有強大的魔法力量，可以幫助你在接下來的冒險中克服各種困難。",
        "choices": {
            "restart": "重新開始",
            "leaveTreasure": "離開洞穴"
        },
        "achievement": "洞穴探險者"
    },
    "ignoreCave": {
        "text": "你決定不進入洞穴，繼續沿著湖邊的小路前行。你穿過湖邊的小路，來到了一片新的區域，展開新的冒險。",
        "choices": {
            "exploreNewArea": "探索新區域",
            "rest": "休息"
        }
    },
    "exploreTunnel": {
        "text": "你進入地道，發現裡面有許多危險的機關和陷阱，但同時也有無數的寶藏。你必須小心翼翼地探索。",
        "choices": {
            "disarmTraps": "解除陷阱",
            "collectTreasure": "收集寶藏"
        }
    },
    "leaveTunnel": {
        "text": "你決定離開地道，回到廢墟的地面上，繼續探索其他地方。",
        "choices": {
            "exploreRuinsAgain": "再次探索廢墟",
            "leaveRuinsCompletely": "完全離開廢墟"
        }
    },
    "collectHerbs": {
        "text": "你採集了許多神奇的藥草，這些藥草可以在接下來的冒險中幫助你恢復體力和治癒傷口。",
        "choices": {
            "restart": "重新開始",
            "restAtHerbGarden": "在藥草園休息"
        }
    },
    "leaveHerbs": {
        "text": "你決定離開藥草園，繼續你的冒險。",
        "choices": {
            "restart": "重新開始",
            "exploreNewArea": "探索新區域"
        }
    },
    "fightBeast": {
        "text": "你與怪物展開了激烈的戰鬥。經過一番拼搏，你成功地擊敗了怪物，獲得了它守護的寶藏。",
        "choices": {
            "collectTreasure": "收集寶藏",
            "leaveImmediately": "立即離開"
        },
        "achievement": "勇猛的戰士"
    },
    "runAway": {
        "text": "你決定逃跑，避開這隻危險的怪物。你飛快地穿過森林，找到了一條安全的道路。",
        "choices": {
            "restart": "重新開始",
            "restAtSafePlace": "在安全的地方休息"
        }
    },
    "collectTreasure": {
        "text": "你收集了寶藏，這些寶藏將在接下來的冒險中對你大有幫助。",
        "choices": {
            "restart": "重新開始",
            "restAndExamineTreasure": "休息並檢查寶藏"
        }
    },
    "leaveImmediately": {
        "text": "你決定立即離開這個危險的地方，繼續你的冒險。",
        "choices": {
            "exploreNewArea": "探索新區域",
            "restAndRecover": "休息並恢復"
        }
    },
    "achievements": {
        "text": "你完成了這段冒險旅程，這是你獲得的成就：",
        "choices": {
            "restart": "重新開始"
        }
    }
};
let selectedCharacter = null;
let achievements = [];
let diamonds = 0;

function selectCharacter(character) {
    selectedCharacter = character;
    document.getElementById('character-selection').style.display = 'none';
    document.getElementById('choices-container').style.display = 'block';
    displayStory('start', character);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}

function appendMessage(text, isLeft, callback) {
    const messagesContainer = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${isLeft ? 'left' : 'right'}`;

    const avatar = document.createElement('img');
    avatar.src = isLeft ? 'computer.png' : storyData.characters[selectedCharacter].avatar;
    avatar.alt = isLeft ? '電腦' : storyData.characters[selectedCharacter].name;

    const messageText = document.createElement('div');
    messageText.className = 'message-text';

    messageElement.appendChild(avatar);
    messageElement.appendChild(messageText);
    messagesContainer.appendChild(messageElement);

    typeText(messageText, text, callback);
}

function typeText(element, text, callback) {
    let index = 0;
    const interval = setInterval(() => {
        element.innerHTML += text[index];
        index++;
        if (index === text.length) {
            clearInterval(interval);
            if (callback) callback();
        }
    }, 50);
}

function displayChoices(choices) {
    const choicesContainer = document.getElementById('choices-container');
    choicesContainer.innerHTML = '';
    for (const choice in choices) {
        const button = document.createElement('button');
        button.className = 'choice-button';
        button.innerText = choices[choice];
        button.onclick = () => {
            appendMessage(choices[choice], false, () => {
                if (choice === 'restart') {
                    clearMessages();
                    displayCharacterSelection();
                } else {
                    displayStory(choice);
                }
            });
        };
        choicesContainer.appendChild(button);
    }
}

function displayStory(node, character = selectedCharacter) {
    const story = node === 'start' ? storyData.start[character] : storyData[node];
    appendMessage(story.text, true, () => {
        if (story.achievement && !achievements.includes(story.achievement)) {
            achievements.push(story.achievement);
            diamonds += 10; // 每次解鎖成就時增加10鑽石
            showAchievement(story.achievement, () => {
                if (story.choices) {
                    displayChoices(story.choices);
                } else {
                    displayAchievements();
                }
            });
        } else {
            if (story.choices) {
                displayChoices(story.choices);
            } else {
                displayAchievements();
            }
        }
        updateDiamondsDisplay(); // 更新顯示的鑽石數量
    });
}

function showAchievement(achievement, callback) {
    const existingAchievementContainer = document.querySelector('.achievement-fullscreen');
    if (existingAchievementContainer) {
        existingAchievementContainer.remove();
    }

    const achievementContainer = document.createElement('div');
    achievementContainer.className = 'achievement-fullscreen';
    achievementContainer.innerHTML = `<div class="achievement-content">成就解鎖：${achievement}</div>`;

    const continueButton = document.createElement('button');
    continueButton.className = 'choice-button';
    continueButton.innerText = '繼續遊戲';
    continueButton.onclick = () => {
        achievementContainer.remove();
        if (callback) callback();
    };

    const restartButton = document.createElement('button');
    restartButton.className = 'choice-button';
    restartButton.innerText = '重新開始';
    restartButton.onclick = () => {
        achievementContainer.remove();
        clearMessages();
        displayCharacterSelection();
    };

    achievementContainer.appendChild(continueButton);
    achievementContainer.appendChild(restartButton);
    document.body.appendChild(achievementContainer);
}

function displayAchievements() {
    const messagesContainer = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.className = 'message left';

    const avatar = document.createElement('img');
    avatar.src = 'computer.png';
    avatar.alt = '電腦';

    const messageText = document.createElement('div');
    messageText.className = 'message-text';
    messageText.innerHTML = `你完成了這段冒險旅程，這是你獲得的成就：<br>${achievements.join('<br>')}<br>你獲得了 ${diamonds} 鑽石`;

    messageElement.appendChild(avatar);
    messageElement.appendChild(messageText);
    messagesContainer.appendChild(messageElement);

    const choicesContainer = document.getElementById('choices-container');
    choicesContainer.innerHTML = '';
    const button = document.createElement('button');
    button.className = 'choice-button';
    button.innerText = '重新開始';
    button.onclick = () => {
        clearMessages();
        displayCharacterSelection();
    };
    choicesContainer.appendChild(button);
}

function displayCharacterSelection() {
    document.getElementById('character-selection').style.display = 'block';
    document.getElementById('choices-container').style.display = 'none';
}

function updateDiamondsDisplay() {
    const diamondsDisplay = document.getElementById('diamonds-display');
    diamondsDisplay.innerHTML = `<img src="diamond.png" alt="鑽石圖案" class="diamond-icon"> 鑽石：${diamonds}`;
}

function showAllAchievements() {
    const achievementList = achievements.join('<br>');
    const achievementContainer = document.createElement('div');
    achievementContainer.className = 'achievement-list';
    achievementContainer.innerHTML = `<div class="achievement-content">你獲得的成就：<br>${achievementList}<br>你獲得了 ${diamonds} 鑽石</div>`;
    document.body.appendChild(achievementContainer);

    const closeButton = document.createElement('button');
    closeButton.className = 'choice-button';
    closeButton.innerText = '關閉';
    closeButton.onclick = () => {
        achievementContainer.remove();
    };
    achievementContainer.appendChild(closeButton);
}

document.addEventListener('DOMContentLoaded', () => {
    const characterSelectionHTML = `
        <div id="character-selection">
            <h2>選擇你的角色</h2>
            <button class="choice-button" onclick="selectCharacter('warrior')">勇士</button>
            <button class="choice-button" onclick="selectCharacter('mage')">法師</button>
            <button class="choice-button" onclick="selectCharacter('archer')">弓箭手</button>
        </div>
    `;
    const achievementButtonHTML = `
        <button id="achievement-button" class="choice-button" onclick="showAllAchievements()">查看成就</button>
    `;
    const diamondsDisplayHTML = `
        <div id="diamonds-display"><img src="diamond.png" alt="鑽石圖案" class="diamond-icon"> 鑽石：0</div>
    `;
    document.getElementById('chat-container').insertAdjacentHTML('afterend', achievementButtonHTML);
    document.getElementById('chat-container').insertAdjacentHTML('afterbegin', characterSelectionHTML);
    document.getElementById('chat-container').insertAdjacentHTML('beforebegin', diamondsDisplayHTML);
    document.getElementById('choices-container').style.display = 'none';
});