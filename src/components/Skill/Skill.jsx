
function Skill({ icon, name }) {
  return (
    <div className="flex items-center gap-1 px-3 py-1 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
      <span className="text-white/80">{icon}</span>
      <span className="text-white text-sm">{name}</span>
    </div>
  );
}


export default Skill;