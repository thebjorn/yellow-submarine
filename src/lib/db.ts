export type LaunchCode = {
	id: number;
	code: string;
};
export type LaunchCodeListResult = {
	records: LaunchCode[];
	page: number;
	numPages: number;
};

export const getLaunchCodeListResult = (params: URLSearchParams): LaunchCodeListResult => {
	const rpp = 10;
	const numPages = Math.ceil(launchCodes.length / rpp);
	let page = parseInt(params.get('page') as 'string');
	if (Number.isNaN(page)) {
		page = 1;
	}
	page = Math.max(1, Math.min(numPages, page));
	const records = launchCodes.slice((page - 1) * rpp, page * rpp);
  return {
    page,
    numPages,
    records
  }
};

const launchCodes: LaunchCode[] = `
password
123456
12345678
1234
qwerty
12345
dragon
baseball
football
letmein
monkey
696969
abc123
mustang
michael
shadow
master
jennifer
111111
2000
jordan
superman
harley
1234567
hunter
trustno1
ranger
buster
thomas
tigger
robert
soccer
batman
test
pass
killer
hockey
`
	.split(/\n/)
	.map((s) => s.trim())
	.filter((s) => s.length > 0)
	.map((code, id) => {
		return {
			code,
			id
		};
	});
