<template>
    <header>
        <h1>Monster Slayer</h1>
    </header>
    <div id="game">
        <section id="monster" class="container">
            <h2>Monster Health</h2>
            <div class="healthbar">
                <div class="healthbar__value" :style="monsterBarStyles"></div>
            </div>
        </section>
        <section id="player" class="container">
            <h2>Your Health</h2>
            <div class="healthbar">
                <div class="healthbar__value" :style="playerBarStyles"></div>
            </div>
        </section>
        <section class="container" v-if="winner">
            <h2>Game Over</h2>
            <h3 v-if="winner === 'monster'">You Lost</h3>
            <h3 v-else-if="winner === 'player'">You Won</h3>
            <h3 v-else-if="winner === 'draw'">Draw</h3>
            <button v-on:click="startGame()">Start New Game</button>
        </section>
        <section id="controls" v-else>
            <button v-on:click="attackMonster()">ATTACK</button>
            <button :disabled="mayUseSpecialAttack" v-on:click="specialAttackMonster()">SPECIAL ATTACK</button>
            <button v-on:click="healPlayer()">HEAL</button>
            <button v-on:click="surrender()">SURRENDER</button>
        </section>
        <section id="log" class="container">
            <h2>Battle Log</h2>
            <ul>
                <li v-for="logMessage in logMessages">
                <span
                    :class="{'log--player': logMessage.actionBy === 'player', 'log--monster':logMessage.actionBy === 'monster'}">
                    {{ logMessage.actionBy === 'player' ? 'Player' : 'Monster' }}
                </span>
                    <span v-if="logMessage.actionType === 'heal'"> heals himself for <span class="log--heal">{{ logMessage.actionValue }}</span></span>
                    <span v-else> attacks and deals <span class="log--damage">{{ logMessage.actionValue }}</span></span>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
    name: "MonsterSlayer",
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: []
        }
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHealth < 0) {
                return {width: '0%'}
            }
            return {width: this.monsterHealth + '%'}
        },
        playerBarStyles() {
            if (this.playerHealth < 0) {
                return {width: '0%'}
            }
            return {width: this.playerHealth + '%'}
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        },
    },
    watch: {
        playerHealth(value) {
            if (value <0 && this.monsterHealth <= 0) {
                // draw
                this.winner = 'draw';
            } else if (value <= 0) {
                // lose
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value <0 && this.playerHealth <= 0) {
                // draw
                this.winner = 'draw';
            } else if (value <= 0) {
                // win
                this.winner = 'player';
            }
        }
    },
    methods: {
        getRandomValue(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        },

        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.currentRound = 0;
            this.logMessages = [];
        },
        attackMonster() {
            this.currentRound++;
            const attackValue = this.getRandomValue(5,12);
            this.monsterHealth  -= attackValue;
            this.addLogMessage('player', 'attack', attackValue);
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = this.getRandomValue(8,15);
            this.playerHealth  -= attackValue;
            this.addLogMessage('monster', 'attack', attackValue);
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = this.getRandomValue(10,25);
            this.monsterHealth  -= attackValue;
            this.addLogMessage('player', 'specialAttack', attackValue);
            this.attackPlayer();
        },
        healPlayer() {
            this.currentRound++;
            const healValue = this.getRandomValue(8,20);
            if (this.playerHealth + healValue > 100)
                this.playerHealth = 100;
            else
                this.playerHealth += healValue;

            this.addLogMessage('player', 'heal', healValue);
            this.attackPlayer();
        },
        surrender() {
            this.winner = 'monster';
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value,
            })
        }
    }
}
</script>

<style scoped src="../assets/styles/MonsterSlayer.css">
</style>