<template>
  <div class="hello">
    <button class="btn-start" @click="getToken" type="button" name="button">start</button>
  </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
        return {
        }
    },
    methods: {
        getToken() {
            window.open("https://www.instagram.com/oauth/authorize/?client_id=e52a9f9fea594061a51216aee3f48e02&redirect_uri=http://localhost:8081/&response_type=token&scope=public_content+follower_list+likes");

            const regex = /\access_token=(.*)/g;
            const str = window.location.href;
            let token;
            let m;

            let myStorage = window.localStorage;

            while ((m = regex.exec(str)) !== null) {
                // This is necessary to avoid infinite loops with zero-width matches
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }
                token = m[1];
                console.log(token);

                localStorage.setItem('token', token);

                window.location.reload();
            }
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
