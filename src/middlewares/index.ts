import displayErrorToasts from './display-error-toasts';
import fetchMetadata from './fetch-metadata';
import fetchPlaylists from './fetch-playlists';
import fetchSearch from './fetch-search';
import handleOAuth from './handle-oauth';
import handlePlaybackTrackChange from './handle-playback-track-change';

export default [
    displayErrorToasts as any,
    fetchMetadata as any,
    fetchPlaylists as any,
    fetchSearch as any,
    handleOAuth as any,
    handlePlaybackTrackChange as any,
];
