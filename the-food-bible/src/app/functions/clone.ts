export function clone<T>(v:T):T
{
	if(v == null) {
		return null;
	}

	if (v instanceof Array) {
		return v.slice().map(v => clone(v)) as any;
	}

	if(typeof v == "object") {
		const out : any = {};

		for(const key in v)
		{
			out[key] = clone(v[key]);
		}

		return out;
	}

	return v;
}
