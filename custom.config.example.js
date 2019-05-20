module.exports = {
  DEFAULT_LOG_LEVEL: "debug",
  DEFAULT_STORAGE_SYNC: {},
  webExt: config => ({
    ...config,
    run: {
      ...config.run,
      // Automatically open the Browser Console on startup.
      browserConsole: true,
      // Use Nightly.
      firefox: "nightly",
      // This is a useful start page.
      startUrl: ["about:debugging#/runtime/this-firefox"],
      pref: [
        // Allow accessing about:config without the warning screen.
        "general.warnOnAboutConfig=false",
        // Hide info/hint/intro bars/popups.
        "datareporting.policy.dataSubmissionPolicyBypassNotification=true",
        "browser.urlbar.timesBeforeHidingSuggestionsHint=0",
        "browser.contentblocking.introCount=20",
      ],
    },
  }),
};
