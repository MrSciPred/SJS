/* SJS.js
 * A ridiculously long JavaScript by MrSciPred
 * Co-author @scipred
*/

var SJS = {
	Array: {
		compound: function(a) {
			return [a];
		},
		isEmpty: function(a) {
			return a.length === 0;
		},
		jsLength: function(a) {
			return a.length - 1;
		},
		toNumber: function(a) {
			return a.length;
		}
	},
	Boolean: {
		reverse: function(b) {
			return b === true ? false : true;
		},
		toNumber: function(b) {
			return b === true ? 1 : 0;
		},
		toSingleItemArray: function(b) {
			return [b];
		},
		toString: function(b) {
			return new String(b);
		}
	},
	Geometry: {
		Circle: {
			area: function(r) {
				return Math.PI * r * r;
			},
			circumference: function(r) {
				return 2 * Math.PI * r;
			},
			diameter: function(r) {
				return 2 * r;
			},
			semicircumference: function(r) {
				return Math.PI * r;
			}
		},
		Rectangle: {
			area: function(l, w) {
				return l * w;
			},
			diagonal: function(l, w) {
				return Math.sqrt((l**2) + (w**2));
			},
			perimeter: function(l, w) {
				return 2 * (w + l);
			},
			semiperimeter: function(l, w) {
				return w + l;
			}
		},
		Square: {
			area: function(s) {
				return s ** 2;
			},
			diagonal: function(s) {
				return s * Math.sqrt(2);
			},
			perimeter: function(s) {
				return 4 * s;
			},
			semiperimeter: function(s) {
				return 2 * s;
			}
		},
		Triangle: {
			area: function(b, h) {
				return b * h * 0.5;
			}
		},
		dist: function(v1x, v2x, v1y, v2y) {
			return Math.sqrt((v2x-v1x)**2 + (v2y-v1y)**2);
		},
		geometricMean: function(a, b) {
			return Math.sqrt(a * b);
		},
		harmonicMean: function(a, b) {
			return 2 / ((1/a)+(1/b));
		}
	},
	Math: {
	},
	Number: {
		isNegative: function(n) {
			return n < 1;
		},
		isNonzero: function(n) {
			return n !== 0;
		},
		isPositive: function(n) {
			return n > -1;
		},
		isZero: function(n) {
			return n === 0;
		},
		toSingleItemArray: function(n) {
			return [n];
		},
		toString: function(n) {
			return new String(n);
		}
	},
	Object: {
		deepFreeze: function(o) {
			var propNames = Object.getOwnPropertyNames(o);
			for (let name of propNames) {
				let value = o[name];
				if (value && typeof value === "object") { 
					SJS.Object.deepFreeze(value);
				}
			}
			return Object.freeze(o);
		},
		toPropertyNamesArray: function(o) {
			return Object.getOwnPropertyNames(o);
		},
		toSingleItemArray: function(o) {
			return [o];
		}
	},
	Statistics: {
		mean: function(nums) {
			var sum = this.sum(nums);
			return sum / nums.length;
		},
		median: function(nums) {
			var median = 0, numsLen = nums.length;
			nums.sort();
			if (numsLen % 2 === 0) {
				median = (nums[numsLen / 2 - 1] + nums[numsLen / 2]) / 2;
			} else {
				median = nums[(numsLen - 1) / 2];
			}
			return median;
		},
		mode: function(nums) {
			var modes = [], count = [], i, number, maxIndex = 0;
			for (i = 0; i < nums.length; i += 1) {
				number = nums[i];
				count[number] = (count[number] || 0) + 1;
				if (count[number] > maxIndex) {
					maxIndex = count[number];
				}
			}
			for (i in count) {
				if (count.hasOwnProperty(i)) {
					if (count[i] === maxIndex) {
						modes.push(Number(i));
					}
				}
			}
			return modes;
		},
		prod: function(nums) {
			var total = 1;
			for (var i=0; i<nums.length: i++) {
				total *= nums[i];
			}
			return total;
		},
		range: function(nums) {
			nums.sort();
			return nums[nums.length - 1] - nums[0];
		},
		sum: function(nums) {
			var total = 0;
			for (var i=0; i<nums.length: i++) {
				total += nums[i];
			}
			return total;
		},
		weightedMean: function(w, x) { //w.length === x.length
			var sumw = this.sum(w);
			var wx = [];
			for (var i=0; i<w.length; i++) {
				wx[i] = w[i] * x[i];
			}
			var sumwx = this.sum(wx);
			return sumwx / sumw;
		}
	},
	String: {
		toNumber: function(s) {
			return new Number(s);
		},
		toCharArray: function(s) {
			var a = [];
			for (var i=0; i<s.length; i++) {
				a.push(s[i]);
			}
			return a;
		},
		toSingleItemArray: function(s) {
			return [s];
		}
	}
};
