import questionData from "../../lib/mock-questions.json";

export default function handler(req, res) {
    res.status(200).json(questionData.questions);
}
