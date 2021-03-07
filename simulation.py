import numpy as np
from scipy.integrate import odeint
import matplotlib.pyplot as plt

N = 100 # Initial population
R0 = 0 # Initial recovered - immune or dead
I0 = 3 # Initial infect
S0 = N - I0 - R0 # Initial susceptible
B = 0.2 # Infections per unit time                      
Y = 1.0/10 # Recovery Time
D = 0.2 # Death Rate
SD_C = 0 # Social-distancing compliance, 0 = none, 1 = heavy social distancing
MW_C = 0 # Mask-wearing compliance, 0 = no masks, 1 = everyone wears mask

# Assume masks reduce by 50% both ways?
E_IN = 0.5
E_OUT = 0.5

# Unsimplified
# MASK_FACTOR = 1*(1-MW_C)**2 + (E_OUT*1*)*MW_C*(1-MW_C) + (1*E_IN)*MW_C*(1-MW_C) + E_IN*E_OUT*MW_C**2;

# Simplified
# Relative chance of infectivition accouting for masks (%)
# Eg. No masks would mean MASK_FACTOR = 1 (no change), everyone wearing 100% effective masks => MASK_FACTOR = 0 (zero transmission)
MASK_FACTOR = (1-MW_C)**2 + E_OUT*MW_C*(1-MW_C) + E_IN*MW_C*(1-MW_C) + E_IN*E_OUT*MW_C**2;

# Reduction in infectivity due to masks as % would be 1 - MASK_FACTOR

# Just do this?
B = B*MASK_FACTOR

# A grid of time points (in days)
t = np.linspace(0, 160, 160)

def derivative(y, t, N, beta, gamma):
    S, I, R = y
    dSdt = -beta * S * I / N
    dIdt = beta * S * I / N - gamma * I
    dRdt = gamma * I
    return (dSdt, dIdt, dRdt)

# Initial conditions vector
y0 = (S0, I0, R0)
# Integrate the SIR equations over the time grid, t.
ret = odeint(derivative, y0, t, args=(N, B, Y))
S, I, R = ret.T

# Plot the data on three separate curves for S(t), I(t) and R(t)
fig = plt.figure(facecolor='w')
ax = fig.add_subplot(111, facecolor='#dddddd', axisbelow=True)
ax.plot(t, S/N, 'b', alpha=0.5, lw=2, label='Susceptible')
ax.plot(t, I/N, 'r', alpha=0.5, lw=2, label='Infected')
#ax.plot(t, (R/1000), 'g', alpha=0.5, lw=2, label='Recovered with immunity')
ax.plot(t, R/N*(1-D), 'g', alpha=0.5, lw=2, label='Recovered with immunity')
ax.plot(t, R/N*D, 'k', alpha=0.5,lw=2, label='Fockin Dead')
ax.set_xlabel('Time /days')
ax.set_ylabel('Number (1000s)')
ax.set_ylim(0,1.2)
ax.yaxis.set_tick_params(length=0)
ax.xaxis.set_tick_params(length=0)
ax.grid(b=True, which='major', c='w', lw=2, ls='-')
legend = ax.legend()
legend.get_frame().set_alpha(0.5)
for spine in ('top', 'right', 'bottom', 'left'):
    ax.spines[spine].set_visible(False)
plt.savefig('foo.png')