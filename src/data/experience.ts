export type Experience = {
    company: string;
    job: string[];
    location: string;
    year: string;
    isEmpty?: boolean;
};

const experience: Experience[] = [
    {
        company: "Phicos",
        job: ["Frontend Developer"],
        location: "Surakarta, Central Java, Indonesia",
        year: "2023 - present",
    },
];

export default experience;