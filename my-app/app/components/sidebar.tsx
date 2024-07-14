import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="bg-black min-h-screen">
      <nav>
        <ul>
          <li className="mb-2">
            <Link href="/roster" className="block text-neutral-400 hover:text-blue-500">Roster</Link>
          </li>
          <li className="mb-2">
            <Link href="/match-up" className="block text-neutral-400 hover:text-blue-500">Match-up</Link>
          </li>
          <li className="mb-2">
            <Link href="/waivers" className="block text-neutral-400 hover:text-blue-500">Waivers</Link>
          </li>
          <li className="mb-2">
            <Link href="/league" className="block text-neutral-400 hover:text-blue-500">League</Link>
          </li>
          <li className="mb-2">
            <Link href="/settings" className="block text-neutral-400 hover:text-blue-500">Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
