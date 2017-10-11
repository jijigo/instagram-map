<template>
  <div class="profile">

      <img :src="profileData.profile_picture" alt="">
      {{ profileData.username }}


      <div id="map">

      </div>


      <ul>
          <li v-for="media in mediaData">
              <img :src="media.images.thumbnail.url" alt="">
          </li>
      </ul>

  </div>
</template>

<script>
export default {
    name: 'profile',
    data () {
        return {
            token: window.localStorage.getItem("token"),
            profileData: '',
            mediaData: ''

        }
    },
    mounted() {
        let _this = this;

        $.ajax({
            url: `https://api.instagram.com/v1/users/self/?access_token=${this.token}`,
            type: 'GET',
            dataType: 'jsonp',
            cache: false,
            success: function(msg) {
                console.log(msg.data);
                _this.profileData = msg.data;
            }
        })

        $.ajax({
            url: `https://api.instagram.com/v1/users/self/media/recent/?access_token=${this.token}`,
            type: 'GET',
            dataType: 'jsonp',
            cache: false,
            success: function(msg) {
                console.log(msg.data);
                _this.mediaData = msg.data;
            }
        })


    }
}
</script>

<style scoped>

li {
    display: inline-flex;
    margin: 5px;
}

</style>
