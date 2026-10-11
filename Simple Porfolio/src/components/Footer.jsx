import { profile } from "../data/site";

export default function Footer() {
  return (
    <footer className="container footer">
      <span>© {new Date().getFullYear()} {profile.name}. Built with React + 3D motion.</span>
      <span>{profile.location}</span>
    </footer>
  );
}
