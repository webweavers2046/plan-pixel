
'use client';

import { Avatar } from 'flowbite-react';

export function Avatar() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar img="/images/people/profile-picture-5.jpg" rounded status="busy" statusPosition="top-right" />
    </div>
  );
}
