'use client';

import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const [language, setLanguage] = useState(i18n.language || 'vi');

  const changeLanguage = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
    document.cookie = `NEXT_LOCALE=${lng}; path=/`;
    router.refresh();
  };

  return (
    <div className="flex items-center gap-2">
      <select
        value={language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="p-2 border rounded-md bg-white text-sm"
      >
        <option value="vi">Tiếng Việt</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default LanguageSelector;