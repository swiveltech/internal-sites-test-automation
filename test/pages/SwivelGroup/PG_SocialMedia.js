class SocialMedia {
  /**
   * define selectors using getter methods
   */
  get ele_FacebookTitle() {
    return $('//span[text()="See more from Swivel Group"]');
  }

  get ico_FacebookClosePoopUp() {
    return $('//div[@aria-label="Close"]');
  }

  get ele_InstagramTitle() {
    return $(
      '//span[normalize-space()="See photos, videos and more from swivel.group"]',
    );
  }

  get ele_TwitterTitle() {
    return $('//span[text()="Sign in to X"]');
  }

  get ico_TwitterClosePoopUp() {
    return $('//button[@aria-label="Close"]');
  }

  get ele_LinkedinTitle() {
    return $(
      '//h2[normalize-space()="Sign in to see who you already know at Swivel Group"]',
    );
  }

  get ico_LinkedinClosePoopUp() {
    return $('//button[@aria-label="Dismiss"]');
  }
}

export default new SocialMedia();
