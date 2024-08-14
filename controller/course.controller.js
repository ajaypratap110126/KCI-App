import Course from '../model/course.model.js';

export const getCourse = async(req, res) => {
    try {
        const cour = await Course.find();
        res.status(200).json(cour);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json(error);
    }
}
