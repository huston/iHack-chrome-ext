//chrome.tts.speak("Hello, World!");
//chrome.browserAction.setBadgeText({text: "Hi!"});
//try {
//} catch (e) {
//alert(e);
//}

/* global $ */
/* global Vue */
/* global fetch */
/* global axios */
/*
$(function() {
    let libs = ['lodash', 'underscore'];
    for (let lib of libs) {

    }
});
*/

const About = { template: '<div>About</div>' };
const Home = { template: `<div>
    <input type="text" name="library" v-model="library" placeholder="Enter Library" title="Enter Library"/>
    <button @click="addLibrary(library)" id="update" title="Add Library">Add</button>
    <h1 title="Add Library"></h1>

    <table v-if="scores.length > 0">
        <tr><th>Name</th><th>Score</th></tr>
        <tr v-for="(score, i) in scores"><td v-bind:class="{best: i==0, rest: i!=0}">{{score.name}}</td><td v-bind:style="colors[i%colors.length]">{{score.score}}</td></tr>
    </table>
    <div v-else>
        Please enter a library above and click Add</div>
    <div v-if="scores.length>4">Really??? Are you sure it's relevant to compare all those? Learn to focus!!!</div>
</div>` ,
    data: function () {
        return {
            library: '',
            scores: [],
            colors: ['color: red', 'color: green']
        }
    },
    created: function() {
        this.addLibrary('lodash');
        this.addLibrary('underscore')
    },
    methods: {
        addLibrary: function (libraryName) {
            let self = this;
            console.log('Got to addLibrary');
            //axios way
            axios.get(`https://api.npms.io/v2/package/${libraryName}`)
                .then(function(res) {
                self.scores.push({name: libraryName, score: Math.round(res.data.score.final * 100)});
                self.scores.sort(self.compareLibrariesByScore);
            });
            //native fetch way
            // fetch(`https://api.npms.io/v2/package/${libraryName}`)
            //     .then(data => data.json())
            //     .then(function(doc) {
            //         console.log(doc);
            //         self.scores.push({name: libraryName, score: Math.round(doc.score.final * 100)});
            //         self.scores.sort(self.compareLibrariesByScore);
            // });
            this.library = '';
        },
        compareLibrariesByScore: function(a,b) {
            return a.score > b.score;
        }
    }
};

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About }
];

try {
//const router = new VueRouter({
//    routes
//});

let vm = new Vue({
    el: '#app'//,
//    router
});
} catch (e) {
alert(e);
}
