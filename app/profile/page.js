export const dynamic = 'force-dynamic';

async function getProfile() {
  return { name: 'کاربر تستی', email: 'test@example.com' };
}

export default async function ProfilePage() {
  const user = await getProfile();

  return (
    <div>
      <h1>👤 پروفایل کاربر</h1>
      <p>نام: {user.name}</p>
      <p>ایمیل: {user.email}</p>
    </div>
  );
}