import Skill from "../models/Skill.js";

export const addSkill = async (req, res) => {
  try {
    const { skills, experience, goal } = req.body;

    const skill = await Skill.findOneAndUpdate(
      { user: req.user.id },
      {
        skills,
        experience,
        goal,
      },
      {
        new: true,
        upsert: true,
      }
    );

    res.status(200).json(skill);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find({
      user: req.user.id,
    });

    res.json(skills);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const deleteSkill = async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);

    res.json({
      message: "Skill Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};