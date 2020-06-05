<template>
    <div>
        <b-modal id='albumModal'
            ref='albumModal'
            hide-footer
            no-close-on-backdrop
            centered
            size="md"
        >
        <template v-slot:modal-title>
            {{ artistName }} Album List
        </template>
            <div class="modal-body">
                <h6 class="text-center text-danger" v-if="errorMessage">{{ errorMessage }} </h6>
                <div class="list-group" v-for="(album, i) in albumList" :key="i">
                    <button type="button" class="list-group-item list-group-item-action" @click.prevent='showTrackModal(album.idAlbum, album.strAlbum)'>
                        <strong>{{i+1}}. {{ album.strAlbum }} ( {{ album.intYearReleased }} )</strong>
                    </button>
                </div>
            </div>
        </b-modal>
        <TrackModal ref="trackModalComponent" :albumTrack='albumTrack'></TrackModal>
    </div>
</template>

<script>
import axios from 'axios'
import TrackModal from './TrackModal'
export default {
    name: 'AlbumModal',
    props: ['artistAlbum'],
    components: {
        TrackModal
    },
    data() {
        return {
            errorMessage: false,
            artistName: '',
            artistId: '',
            albumList: null,
            albumTrack: {
                id: '',
                name: ''
            }
        }
    },
    methods : {
        showAlbum() {
            this.$refs.albumModal.show()
            this.artistName= this.artistAlbum.name,
            this.artistId= this.artistAlbum.id
            axios.get(`https://www.theaudiodb.com/api/v1/json/1/album.php?i=${this.artistId}`)
                    .then(data => {
                        // console.log(data.data.album)
                        this.albumList= data.data.album
                        this.errorMessage= false;
                    })
                    .catch(err => {
                        this.errorMessage = `Sorry, ${this.artistName} album list not in our database yet`
                        this.albumList = null;
                    })
        },
        showTrackModal(albumId, albumName) {
            this.albumTrack.id = albumId,
            this.albumTrack.name = albumName,
            this.$refs.trackModalComponent.showTrack()
        }
    }
}
</script>

<style>
</style>