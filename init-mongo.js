db = db.getSiblingDB('inflectiondb');


if (!db.getCollectionNames().includes("users")) {
    db.users.insert([
        {username: 'admin', firstname: 'System', lastname: 'Admin', gmail: 'systemAdmin@inflectiontrader.com'},
		{username: 'hillangat', firstname: 'Hillary', lastname: 'Langat', gmail: 'hillangat@gmail.com'}
    ]);
}