const express = require("express");
const router = express.Router();
const passport = require("passport");
const Profile = require("../../models/Profile");

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

// @route   GET api/profile
// @desc    Get current users profile
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        return profile
          ? res.json({ profile })
          : res.json({ msg: "enable to fetch your profile" });
      })
      .catch(err => console.log(err));
  }
);

// @route   POST api/profile
// @desc    Create or edit user profile
// @access  Private

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    newProfile = new Profile({
      user: req.user.id,
      handle: req.body.handle,
      status: req.body.status
    });
    newProfile
      .save()
      .then(profile => res.json({ msg: "profile updated", profile }));
  }
);

module.exports = router;
