export interface Video {
  id: number;
  title: string;
  date: string;
  youtubeId: string; // paste the YouTube video ID here when available (e.g. "dQw4w9WgXcQ")
}

export const videos: Video[] = [
  { id: 1, title: "Range Rover garage UK I Land Rover Engine Specialist I Engine Supply & Fitting",   date: "15 Feb 2026", youtubeId: "ikw2XXqv2RI" },
  { id: 2, title: "Range Rover Discovery Fix I Happy Customer Testimonial I Range Rover Garage Grays",           date: "14 Feb 2026", youtubeId: "KROuXhaMmJQ" },
  { id: 3, title: "Range rover SVR I Engine Rebuild I Range Rover Garage",  date: "12 Feb 2026", youtubeId: "9yswZveeDoM" },
  { id: 4, title: "Transform your range rover with our top notch engine replacement I Engine Rebuilding service",        date: "05 Feb 2026", youtubeId: "gTu-4CpNzFI" },
  { id: 5, title: "Happy customers Feedback I Range Rover Garage I Engine Rebuild Specialist",   date: "28 Jan 2026", youtubeId: "umbhyQt3lUs" },
  { id: 6, title: "Range rover garage I Range Rover 2.0L Evoque 2018 Engine Rebuild",       date: "15 Jan 2026", youtubeId: "f6Db6gs5IB4" },
];
