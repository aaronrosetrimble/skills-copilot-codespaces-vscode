function skillsMember() {
  // Add a new member to the team
  const member = new Member({
    name: 'John Doe',
    skills: ['JavaScript', 'Node.js']
  });

  member.save();
}