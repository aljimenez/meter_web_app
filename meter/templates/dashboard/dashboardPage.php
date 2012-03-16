<!-- Templates -->
<script type="text/template" id="tpl-dashboard-page">
<br>
<div class="span6" style="margin-left:0">
  <table class="table table-bordered" style="border:2px solid #66aac0">
    <tbody>
      <tr>
        <th>
          Circuits Active:
        </th>
        <td class="centered">
          <a href="#circuits"><span class="circuits-active"><%= circuitsActive %></span></a>
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <th>
          Circuits Total:
        </th>
        <td class="centered">
          <a href="#circuits"><span class="circuits-total"><%= circuitsTotal %></span></a>
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <th colspan="3">
        </th>
      </tr>
      <tr>
        <th>
          Latest Sync:
        </th>
        <td class="centered">
          <span class="latest-sync"><%= latestSync %></span>
        </td>
        <td>
          <span class="latest-sync-threshold">
            (max 12 hours)
          </span>
        </td>
      </tr>
      <tr>
        <th>
          Latest SMS:
        </th>
        <td class="centered">
          <span class="latest-sms"><%= latestSMSTime %></span>
        </td>
        <td>
          <span class="latest-sms-id">
            <a href="#sms"><%= latestSMSSender %></a>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div class="span5">
  <table class="table table-bordered" style="border:2px solid #66aac0">
    <thead>
      <tr>
        <td></td>
        <th class="centered">
          Today
        </th>
        <th class="centered">
          Average
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>
          Energy input (kW)
        </th>
        <td class="centered">
          <span class="e-in cur"><%= energyInput %></span>
        </td>
        <td class="centered">
          <span class="e-in avg"><%= energyInputAvg %></span>
        </td>
      </tr>
      <tr>
        <th>
          Energy output (kW)
        </th>
        <td class="centered">
          <span class="e-out cur"><%= energyOutput %></span>
        </td>
        <td class="centered">
          <span class="e-out avg"><%= energyOutputAvg %></span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</script>

<!-- JavaScript -->
<script type="text/javascript" src="js/dashboard/dashboardPage.js"></script>