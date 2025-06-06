class PodcastPage {

    lnk_PodcastButton(name) {
        switch (name) {
        case "Watch Now":
            return $('(//a[.//p[normalize-space(text())="Watch Now"]])[1]');
        default:
            throw new Error(`Podcast button "${name}" not handled in lnk_PodcastButton`);
        }
    } 
}  
export default new PodcastPage();
  