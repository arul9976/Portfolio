
function Skill({ icon, name }) {
  return (
    <div className="flex items-center gap-1 px-3 py-1 h-[50px]  bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
      <span className="text-white/80">{icon}</span>
      <span className="text-white flex max-mini:text-sm">{name}</span>
    </div>
  );
}


export default Skill;