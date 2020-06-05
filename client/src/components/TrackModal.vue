<template>
    <div>
        <b-modal id='trackModal'
            ref='trackModal'
            hide-footer
            no-close-on-backdrop
            centered
            size="md"
        >
        <template v-slot:modal-title>
            {{ nameAlbum }} Track List
        </template>
            <div class="modal-body">
                <h6 class="text-center text-danger" v-if="errorMessage">{{ errorMessage }} </h6>
                <small class="form-text text-muted mb-1">
                        Yellow list = Youtube video
                </small>
                <div class="list-group" v-for="(track, i) in trackList" :key="i">
                    <button v-if="track.strMusicVid === null" type="button" class="list-group-item list-group-item-action">
                        <strong>{{i+1}}. {{ track.strTrack }}</strong>
                    </button>
                    <a v-else :href="track.strMusicVid" target="_blank">
                        <button type="button" class="list-group-item list-group-item-action list-group-item-warning">
                            <strong>{{i+1}}. {{ track.strTrack }}</strong>
                        </button>
                    </a>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'TrackModal',
    props: ['albumTrack'],
    data() {
        return {
            trackList: null,
            errorMessage: false,
            nameAlbum: '',
            idAlbum: ''
        }
    },
    methods: {
        showTrack() {
            this.$refs.trackModal.show()
            this.nameAlbum= this.albumTrack.name
            this.idAlbum= this.albumTrack.id
            axios.get(`https://www.theaudiodb.com/api/v1/json/1/track.php?m=${this.idAlbum}`)
                .then(data => {
                    this.trackList = data.data.track
                    this.errorMessage= false;
                })
                .catch(err => {
                    this.errorMessage = `Sorry, ${this.albumTrack.name} track list not in our database yet`
                    this.trackList = null
                })
        }
    }
}
</script>

<style>

</style>