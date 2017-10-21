<template>
    <div class="profile">

    <img :src="profileData.profile_picture" alt="">

    {{ profileData.username }}

    <ul>
        <li v-for="media in mediaData">
            <img :src="media.images.thumbnail.url" alt="">
        </li>
    </ul>

    <gmap-map
      :center="{lat:10, lng:10}"
      :zoom="7"
      map-type-id="terrain"
      style="width: 100%; height: 500px"
    ></gmap-map>

    </div>
</template>

<script>
// import googlemap from './googlemap.vue'

export default {
    name: 'profile',
    // components : {
    //     'google-map': googlemap
    // },
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
